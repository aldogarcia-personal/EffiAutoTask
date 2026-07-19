import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 5173,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    process.env.MONGO_URL ||
    process.env.MONGODB_URI_ATLAS ||
    "mongodb://localhost:27017/EffiAutoTask",
};

export const { PORT, MONGODB_URI } = config;
export default config;
