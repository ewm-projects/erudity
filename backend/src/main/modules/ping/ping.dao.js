import { Schema } from "mongoose";

import MongoUtils from "../../data/utils.js";

const pingSchema = new Schema({
  message: String,
  date: Date,
});

export const PingDao = MongoUtils.modelFactory("Ping", pingSchema);
