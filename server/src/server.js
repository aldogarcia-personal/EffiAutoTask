// server/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "../models/users.js";

const app = express();
app.use(express.json());
app.use(core());

// Middleware para permitir el uso de JSON
mongoose
  .connect("mongodb://localhost:27017/EffiAutoTask", {
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
  req.send("Servidor corriendo");
  res.send("Servidor corriendo");
});
app.listen(5173, () => {
  console.log("Server corriendo en puerto 5173");
});

export default app;
