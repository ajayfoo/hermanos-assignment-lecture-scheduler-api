import { db } from "../db.js";

const getAllInstructors = async (req, res) => {
  try {
    const allInstructors = await db.instructor.findMany({
      select: { id: true, name: true },
    });
    res.json(allInstructors);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const postInstructors = async (req, res) => {
  const { name } = req.body;
  try {
    const { id: instructorId } = await db.instructor.create({
      data: { name },
      select: { id: true },
    });
    res.send(instructorId.toString());
  } catch (err) {
    console.error(err);
    if (err.name === "PrismaClientValidationError") {
      res.sendStatus(400);
    } else {
      res.sendStatus(500);
    }
  }
};

const getLectures = async (req, res) => {
  const instructorId = parseInt(req.params.id);
  try {
    const lectures = await db.lecture.findMany({
      where: { instructorId },
      include: {
        batch: {
          include: { course: true },
        },
      },
    });
    const formattedLectures = lectures.map((l) => ({
      id: l.id,
      courseName: l.batch.course.name,
      batchName: l.batch.name,
      date: l.date,
    }));
    res.json(formattedLectures);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export { getAllInstructors, postInstructors, getLectures };
