import { db } from "../db.js";

const postLecture = async (req, res) => {
  const { batchId, instructorId, date } = req.body;
  const formattedDate = new Date(date).toISOString();
  try {
    const { id: lectureId } = await db.lecture.create({
      data: { batchId, instructorId, date: formattedDate },
    });
    res.send(lectureId.toString());
  } catch (err) {
    console.error(err);
    if (err.name === "PrismaClientValidationError") {
      res.sendStatus(400);
    } else {
      res.sendStatus(500);
    }
  }
};

export { postLecture };
