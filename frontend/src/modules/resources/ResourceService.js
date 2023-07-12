import axios from "axios";

const baseUrl = "/api/resources";

const get = async (page, limit) => {
  try {
    const res = await axios.get(`${baseUrl}?page=${page}&limit=${limit}`);
    return res.data;
  } catch (e) {
    console.error("Error with resource");
    throw e;
  }
};

export const ResourceService = {
  get,
};
