import { ResourceRepository } from "./resource.repository.js";

const add = (dto) => {
  // dtoGuard
  // duplicatePingGuard
  return ResourceRepository.add(dto);
};

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
  getAll,
  getById,
  update,
  removeById,
};
