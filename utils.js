import { decode } from "base64-arraybuffer";
import { fileDb } from "./db.js";

const saveFileAndGetUrl = async (file) => {
  const fileName = Date.now() + "-" + file.originalname;
  const fileBase64 = decode(file.buffer.toString("base64"));
  try {
    const { error } = await fileDb.storage
      .from("main")
      .upload(fileName, fileBase64, {
        contentType: file.mimetype,
      });
    if (error) {
      throw error;
    }
    const {
      data: { publicUrl },
    } = fileDb.storage.from("main").getPublicUrl(fileName);
    return publicUrl;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export { saveFileAndGetUrl };
