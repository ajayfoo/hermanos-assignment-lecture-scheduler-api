import { db } from "../db.js";

const getAllCourses = async (req, res) => {
  try {
    const allCourses = await db.course.findMany();
    res.send(allCourses);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const postCourse = async (req, res) => {
  const { name, level, description, imageUrl } = req.body;
  try {
    const { id: courseId } = await db.course.create({
      data: {
        name,
        level,
        description,
        imageUrl,
      },
      select: {
        id: true,
      },
    });
    res.send(courseId.toString());
  } catch (err) {
    console.error(err);
    if (err.name === "PrismaClientValidationError") {
      res.sendStatus(400);
    } else {
      res.sendStatus(500);
    }
  }
};

const postBatch = async (req, res) => {
  const courseId = parseInt(req.params.id);
  const { name } = req.body;
  try {
    const { id: batchId } = await db.batch.create({
      data: {
        name,
        course: {
          connect: {
            id: courseId,
          },
        },
      },
    });
    res.send(batchId.toString());
  } catch (err) {
    console.error(err);
    if (err.code === "P2025" || err.name === "PrismaClientValidationError") {
      res.sendStatus(400);
    } else {
      res.sendStatus(500);
    }
  }
};

export { getAllCourses, postCourse, postBatch };
