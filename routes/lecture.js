import { Router } from "express";
import { postLecture } from "../controllers/lecture.js";

const router = Router();

router.post("/", postLecture);

export default router;
