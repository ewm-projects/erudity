import axios from "axios";

const baseUrl = "/api/ping";

const get = async () => {
  try {
    return await axios.get(baseUrl);
  } catch (e) {
    console.error("Error with ping");
    throw e;
  }
};

const add = (ping) => {
  try {
    return axios.post(baseUrl, ping);
  } catch (e) {
    console.error("Error posting ping");
    throw e;
  }
};

const update = (id, newPing) => {
  try {
    return axios.put(`${baseUrl}/${id}`, newPing)
  } catch (e) {
    console.error("Error deleting ping")
    throw e
  }
}

const remove = (id) => {
  try {
    return axios.delete(`${baseUrl}/${id}`)
  } catch (e) {
    console.error("Error deleting ping")
    throw e
  }
}

export const PingService = {
  get,
  add,
  update,
  remove
};
