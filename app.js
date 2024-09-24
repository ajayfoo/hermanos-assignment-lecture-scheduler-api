import "dotenv/config";
import express from "express";
import cors from "cors";
import courseRouter from "./routes/course.js";
import instructorRouter from "./routes/instructor.js";
import lectureRouter from "./routes/lecture.js";

const app = express();
const DEFAULT_PORT = 3000;

app.use(
  cors({
    origin: process.env.ADMIN_CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/courses", courseRouter);
app.use("/instructors", instructorRouter);
app.use("/lectures", lectureRouter);

const port = process.env.PORT || DEFAULT_PORT;
app.listen(port, () => {
  console.log("Listening on PORT " + port);
});
