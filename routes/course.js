import { Router } from "express";
import {
  getAllCourses,
  getBatches,
  postBatch,
  postCourse,
} from "../controllers/course.js";

const router = Router();

router.get("/", getAllCourses);
router.post("/", postCourse);
router.get("/:id/batches", getBatches);
router.post("/:id/batches", postBatch);

export default router;
