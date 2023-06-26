import { PingDao } from "./ping.dao.js";

const add = (dto) => PingDao.create(dto);
const addAll = (dtos) => PingDao.insertMany(dtos);
const getAll = () => PingDao.find({}).exec();
const getById = (id) => PingDao.findById(id).exec();
const removeAll = () => PingDao.deleteMany({}).exec();
const removeById = (id) => PingDao.findByIdAndDelete(id).exec();
const updateById = (id, dto) =>
  PingDao.findByIdAndUpdate(id, dto, { new: true }).exec();

export const PingRepository = {
  add,
  addAll,
  getAll,
  getById,
  removeAll,
  removeById,
  updateById,
};
