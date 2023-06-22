import mongoose from "mongoose";

export default mongoose.models.resource ||
  mongoose.model(
    new mongoose.Schema({
      creators: {
        type: [String],
        validate: [
          (array) => array.length > 0,
          "At least one contributor is required",
        ],
        required: true,
      },
      description: String,
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
    })
  );
