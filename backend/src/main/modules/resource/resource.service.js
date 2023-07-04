import { ResourceRepository } from "./resource.repository.js";

const add = (dto) => {
  // dtoGuard
  // duplicatePingGuard
  return ResourceRepository.add(dto);
};

const count = () => ResourceRepository.count();

const getSome = (limit, skip) => ResourceRepository.getSome(limit, skip);

const getAll = () => ResourceRepository.getAll();

const getById = async (id) => {
  const ping = await ResourceRepository.getById(id);
  // notFoundGuard
  return ping;
};

const update = (id, dto) => {
  // notFoundGuard
  // dtoGuard
  return ResourceRepository.updateById(id, dto);
};

const removeById = (id) => ResourceRepository.removeById(id);

export const ResourceService = {
  add,
  count,
  update,
  getAll,
  getSome,
  getById,
  removeById,
};
