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

export { getAllInstructors, postInstructors };
