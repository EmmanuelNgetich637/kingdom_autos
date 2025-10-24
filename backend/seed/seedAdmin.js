import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  const pw = await bcrypt.hash("adminpass", 10);
  await User.create({
    name: "Admin",
    email: "admin@x.com",
    passwordHash: pw,
    role: "admin",
  });
  console.log("✅ Admin seeded");
  process.exit();
}

seed();
