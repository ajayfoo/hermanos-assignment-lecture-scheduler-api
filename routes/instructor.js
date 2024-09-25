import { Router } from "express";
import {
  getAllInstructors,
  getLectures,
  postInstructors,
  postLectureForInstructor,
} from "../controllers/instructor.js";

const router = Router();

router.get("/", getAllInstructors);
router.post("/", postInstructors);
router.get("/:id/lectures", getLectures);
router.get("/:id/lectures", postLectureForInstructor);

export default router;
