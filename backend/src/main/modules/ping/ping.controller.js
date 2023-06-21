import express from "express";
import { PingService } from "./ping.service.js";

const router = express.Router();

// return all ping messsages
router.get("/", async (req, res) => {
  const pings = await PingService.getAll();
  res.status(200).json(pings);
});

// create new ping message
router.post("/", async (req, res) => {
  const dto = {
    message: req.body.message,
    date: Date.now(),
  };

  const newPing = await PingService.add(dto);

  res.status(201).json(newPing);
});

// delete individual ping message
// update ping message

export { router as PingRouter };
