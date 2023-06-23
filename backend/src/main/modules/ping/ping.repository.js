import { PingModel } from "./ping.model.js";

const add = (dto) => PingModel.create(dto);
const getAll = () => PingModel.find({}).exec();
const getById = (id) => PingModel.findById(id).exec();
const removeById = (id) => PingModel.findByIdAndDelete(id).exec();
const updateById = (id, dto) =>
  PingModel.findByIdAndUpdate(id, dto, { new: true }).exec();

export const PingRepository = {
  add,
  getAll,
  getById,
  removeById,
  updateById,
};
