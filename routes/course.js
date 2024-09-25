import { Router } from "express";
import {
  getAllCourses,
  getBatches,
  postBatch,
  postCourseAndMiddlwares,
} from "../controllers/course.js";

const router = Router();

router.get("/", getAllCourses);
router.post("/", postCourseAndMiddlwares);
router.get("/:id/batches", getBatches);
router.post("/:id/batches", postBatch);

export default router;
