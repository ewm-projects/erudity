import mongoose from "mongoose";
import { env } from "../common/env.js";
import Logger from "../common/logger.js";

const start = async () => {
  try {
    await mongoose.connect(env.getMongoUri());
    return `Database connected at ${env.getMongoUri()}`;
  } catch (error) {
    Logger.error("Could not connect to database!");
    throw error;
  }
};
const stop = async () => await mongoose.connection.close();
const status = async () => await mongoose.connection.db.stats();

const Conn = { start, stop, status };

export default Conn