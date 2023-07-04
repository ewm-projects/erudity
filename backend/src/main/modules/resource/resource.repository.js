import { ResourceDao } from "./resource.dao.js";

const add = (dto) => ResourceDao.create(dto);
const count = () => ResourceDao.estimatedDocumentCount({}).exec();
const addAll = (dtos) => ResourceDao.insertMany(dtos);
const getAll = () => ResourceDao.find({}).exec();
const getSome = (limit, skip) =>
  ResourceDao.find({}).limit(limit).skip(skip).exec();
const getById = (id) => ResourceDao.findById(id).exec();
const removeAll = () => ResourceDao.deleteMany({}).exec();
const removeById = (id) => ResourceDao.findByIdAndDelete(id).exec();
const updateById = (id, dto) =>
  ResourceDao.findByIdAndUpdate(id, dto, { new: true }).exec();

export const ResourceRepository = {
  add,
  count,
  addAll,
  getAll,
  getSome,
  getById,
  removeAll,
  removeById,
  updateById,
};
