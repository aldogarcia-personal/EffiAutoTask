import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "../models/users.js";
import config from "./config.js";

const app = express();
const { MONGODB_URI, PORT } = config;
app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Servidor corriendo");
});

app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`);
});

export default app;
