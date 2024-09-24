import { Router } from "express";
import {
  getAllInstructors,
  postInstructors,
} from "../controllers/instructor.js";

const router = Router();

router.get("/", getAllInstructors);
router.post("/", postInstructors);

export default router;
