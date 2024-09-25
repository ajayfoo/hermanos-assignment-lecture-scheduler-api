import { Router } from "express";
import {
  getAllInstructors,
  getLectures,
  postInstructors,
} from "../controllers/instructor.js";

const router = Router();

router.get("/", getAllInstructors);
router.post("/", postInstructors);
router.get("/:id/lectures", getLectures);

export default router;
