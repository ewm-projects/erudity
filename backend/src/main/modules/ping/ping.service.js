import { PingRepository } from "./ping.repository.js";

const add = (dto) => {
  // dtoGuard
  // duplicatePingGuard
  return PingRepository.add(dto);
};

const count = async () => {
  return await PingRepository.count();
};

const getSome = async (limit, skip) => {
  return await PingRepository.getSome(limit, skip);
};

const getAll = () => PingRepository.getAll();

const getById = async (id) => {
  const ping = await PingRepository.getById(id);
  // notFoundGuard
  return ping;
};

const update = (id, dto) => {
  // notFoundGuard
  // dtoGuard
  return PingRepository.updateById(id, dto);
};

const removeById = (id) => PingRepository.removeById(id);

export const PingService = {
  add,
  count,
  getAll,
  update,
  getSome,
  getById,
  removeById,
};
