import mongoose from "mongoose";

export default mongoose.models.resource ||
  mongoose.model(
    new mongoose.Schema({
      contributors: {
        type: [String],
        validate: [
          (array) => array.length > 0,
          "At least one contributor is required",
        ],
        required: true,
      },
      platform: String,
      createdAt: Date,
      updatedAt: Date,
      dateAdded: {
        type: Date,
        default: Date.now,
      },
      priceUSD: Number,
      difficulty: String,
      avgRating: Number,
      totalRatins: Number,
      type: String,
      hours: Number,
      pages: Number,
    })
  );
