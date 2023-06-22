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

export const PingService = {
  get,
  add,
};
