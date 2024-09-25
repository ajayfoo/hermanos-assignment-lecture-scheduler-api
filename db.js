import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const fileDb = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_ANON_PUBLIC_KEY
);

const db = new PrismaClient();

export { db, fileDb };
