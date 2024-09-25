import "dotenv/config";
import express from "express";
import cors from "cors";
import auth from "./middlewares/auth.js";
import configuredSession from "./middlewares/session.js";
import courseRouter from "./routes/course.js";
import instructorRouter from "./routes/instructor.js";
import lectureRouter from "./routes/lecture.js";
import authRouter from "./routes/auth.js";

const app = express();
const DEFAULT_PORT = 3000;

app.use(
  cors({
    origin: process.env.ADMIN_CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(configuredSession);
app.use(auth.session());

app.use("/auth", authRouter);

app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
});

app.use("/courses", courseRouter);
app.use("/instructors", instructorRouter);
app.use("/lectures", lectureRouter);

const port = process.env.PORT || DEFAULT_PORT;
app.listen(port, () => {
  console.log("Listening on PORT " + port);
});
