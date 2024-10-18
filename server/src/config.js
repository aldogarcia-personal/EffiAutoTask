import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 5173,
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/EffiAutoTask",
};

export default config;
