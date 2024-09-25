import { Router } from "express";
import { validaionAndLoginMiddlewares, logout } from "../controllers/auth.js";

const router = Router();

router.use("/login", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect("../../");
  } else {
    next();
  }
});
router.post("/login", validaionAndLoginMiddlewares);
router.post("/logout", logout);

export default router;
