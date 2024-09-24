import { db } from "../db.js";

const getAllInstructors = async (req, res) => {
  const allInstructors = await db.instructor.findMany({
    select: { id: true, name: true },
  });
  res.json(allInstructors);
};

const postInstructors = async (req, res) => {
  const { name } = req.body;
  const { id: instructorId } = await db.instructor.create({
    data: { name },
    select: { id: true },
  });
  res.send(instructorId.toString());
};

export { getAllInstructors, postInstructors };
