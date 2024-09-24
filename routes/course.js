import { Router } from "express";
import { getAllCourses, postBatch, postCourse } from "../controllers/course.js";

const router = Router();

router.get("/", getAllCourses);
router.post("/", postCourse);
router.post("/:id/batches", postBatch);

export default router;
