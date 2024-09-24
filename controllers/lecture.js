import { db } from "../db.js";

const postLecture = async (req, res) => {
  const { batchId, instructorId, date } = req.body;
  const { id: lectureId } = await db.lecture.create({
    data: { batchId, instructorId, date },
  });
  res.send(lectureId);
};

export { postLecture };
