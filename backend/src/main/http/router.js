import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import path from "path";
import fs from "fs";
import Conn from "../data/conn.js";
import { PingRouter } from "../modules/ping/ping.controller.js";
import { ResourceRouter } from "../modules/resource/resource.controller.js";
import Utility from "../common/utils.js";

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

router.use("/api/pings", PingRouter);
router.use("/api/resources", ResourceRouter);

const setupSwagger = () => {
  const docPath = path.join(Utility.getDirPath("backend"), "swagger.yaml");
  const doc = fs.readFileSync(docPath, "utf8");
  return YAML.parse(doc);
};

router.use("/api/docs", swaggerUi.serve);
router.get("/api/docs", swaggerUi.setup(setupSwagger()));

export default router;
