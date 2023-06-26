import express from "express";
import { PingService } from "./ping.service.js";

const router = express.Router();

// return all ping messsages
// router.get("/", async (req, res) => {
//   const pings = await PingService.getAll();
//   res.status(200).json(pings);
// });

// return paginated response
router.get("/", async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  
  if(page && limit) {
    const skip = (page - 1) * limit; // page - 1 to prevent skipping items on first page
    const results = await PingService.getSome(limit, skip);
    const count = await PingService.count();
    const pages = Math.ceil(count / limit);

    const payload = {
      count,
      pages,
      results
    };

    res.status(200).json(payload);
  } else {
    const results = await PingService.getAll();
    const payload = {
      count: results.length,
      pages: 1,
      results
    }
    res.status(200).json(payload);
  }
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

// update ping message
router.put("/:id", async (req, res) => {
  const dto = {
    message: req.body.message,
    date: Date.now(),
  };

  const updatedPing = await PingService.update(req.params.id, dto);

  res.status(201).json(updatedPing);
});

// delete individual ping message
router.delete("/:id", async (req, res) => {
  await PingService.removeById(req.params.id);
  res.status(204).end();
});

export { router as PingRouter };
