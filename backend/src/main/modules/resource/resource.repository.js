import { ResourceModel } from "./resource.model.js";

const add = (dto) => ResourceModel.create(dto);
const getAll = () => ResourceModel.find({}).exec();
const getById = (id) => ResourceModel.findById(id).exec();
const removeById = (id) => ResourceModel.findByIdAndDelete(id).exec();
const updateById = (id, dto) =>
  ResourceModel.findByIdAndUpdate(id, dto, { new: true }).exec();

export const ResourceRepository = {
  add,
  getAll,
  getById,
  removeById,
  updateById,
};
