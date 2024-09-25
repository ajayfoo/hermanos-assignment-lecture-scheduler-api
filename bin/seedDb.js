import "dotenv/config";
import bcrypt from "bcrypt";
import { db } from "../db.js";

const seedDb = async () => {
  const demoUsername = "demo";
  const demoUserPassword = demoUsername;
  const encryptedPassword = await bcrypt.hash(
    demoUserPassword,
    parseInt(process.env.SALT_ROUNDS)
  );
  await db.user.create({
    data: {
      username: demoUsername,
      password: encryptedPassword,
    },
  });
};

seedDb();
