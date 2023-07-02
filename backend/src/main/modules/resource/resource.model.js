import { Schema } from "mongoose";

import MongoUtils from "../../data/utils.js";

const resourceSchema = new Schema({
  creators: {
    type: [String],
    validate: [
      (array) => array.length > 0,
      "At least one contributor is required",
    ],
    required: true,
  },
  description: String,
  subject: String,
  platform: String,
  format: String,
  createdAt: Date,
  updatedAt: Date,
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  priceUSD: Number,
  difficulty: String,
  avgRating: Number,
  totalRatings: Number,
  hours: Number,
  pages: Number,
  tags: [String],
});

export const ResourceModel = MongoUtils.modelFactory(
  "Resource",
  resourceSchema
);
