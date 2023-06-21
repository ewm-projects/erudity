import { Schema } from "mongoose";

import MongoUtils from "../../data/utils.js";

const pingSchema = new Schema({
  message: String,
  date: Date,
});

export const PingModel = MongoUtils.modelFactory("Ping", pingSchema);
