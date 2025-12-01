// server/index.js
import express, { request, response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Mong_URI, PORT } from "./config";

const app = express();

// Middleware para permitir el uso de JSON
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("API is running");
});

mongoose
  .connect(Mong_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error connecting to MongoDB:", err);
  });

// Middleware para permitir el uso de JSON
app.listen(27017);
console.log(`Servidor corriendo en http://localhost:${PORT}`);
