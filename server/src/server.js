import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "../models/users.js";
import { MONGODB_URI, PORT } from "./config";

const app = express();
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
