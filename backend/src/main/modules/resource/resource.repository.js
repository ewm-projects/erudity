import { ResourceDao } from "./resource.dao.js";

const add = (dto) => ResourceDao.create(dto);
const getAll = () => ResourceDao.find({}).exec();
const getById = (id) => ResourceDao.findById(id).exec();
const removeAll = () => ResourceDao.deleteMany({}).exec();
const removeById = (id) => ResourceDao.findByIdAndDelete(id).exec();
const updateById = (id, dto) =>
  ResourceDao.findByIdAndUpdate(id, dto, { new: true }).exec();

export const ResourceRepository = {
  add,
  getAll,
  getById,
  removeAll,
  removeById,
  updateById,
};
