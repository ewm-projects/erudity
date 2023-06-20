import express from "express";
import Conn from "../data/conn.js";
import { PingRouter } from "../modules/ping/ping.controller.js";

// eslint-disable-next-line new-cap
const router = express.Router();

router.get("/api/health", async (req, res) => {
  const dbStats = await Conn.status();
  const health = {
    status: "OK",
    uptime: `${process.uptime().toFixed(2)} seconds`,
    date: new Date().toLocaleDateString(),
    db: dbStats,
  };

  res.status(200).json(health);
});

router.use("/api/ping", PingRouter);

export default router;
