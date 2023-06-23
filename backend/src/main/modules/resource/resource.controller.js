import express from "express";
import { ResourceService } from "./resource.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const resources = await ResourceService.getAll();
  if (resources.length === 0) {
    res.status(200).json({ message: "sorry, nuthin yet" });
    return;
  }
  res.status(200).json(resources);
});

export { router as ResourceRouter };
