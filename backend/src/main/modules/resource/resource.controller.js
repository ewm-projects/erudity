import express from "express";
import { ResourceService } from "./resource.service.js";
import { ResourceModel } from "./resource.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  let payload = {};

  if (page && limit) {
    const skip = (page - 1) * limit;
    const results = await ResourceService.getSome(limit, skip);
    const count = await ResourceService.count();
    const pages = Math.ceil(count / limit);

    payload = {
      count,
      pages,
      results,
    };
  } else {
    const results = await ResourceService.getAll();

    payload = {
      count: results.length,
      pages: 1,
      results,
    };
  }

  res.status(200).json(payload);
});

router.post("/", async (req, res) => {
  const dto = new ResourceModel(req.body);
  const newResource = await ResourceService.add(dto);

  res.status(201).json(newResource);
});

router.delete("/:id", async (req,res) => {
  await ResourceService.removeById(req.params.id)
  res.status(204).end()
})

export { router as ResourceRouter };
