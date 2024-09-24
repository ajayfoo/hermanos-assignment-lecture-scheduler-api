import { db } from "../db.js";

const getAllCourses = async (req, res) => {
  const allCourses = await db.course.findMany();
  res.send(allCourses);
};

const postCourse = async (req, res) => {
  const { name, level, description, imageUrl } = req.body;
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
};

const postBatch = async (req, res) => {
  const courseId = parseInt(req.params.id);
  const { name } = req.body;
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
};

export { getAllCourses, postCourse, postBatch };
