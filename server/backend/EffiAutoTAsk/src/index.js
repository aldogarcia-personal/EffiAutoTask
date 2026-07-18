import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config.js";

const app = express();
const { MONGODB_URI, PORT } = config;

// Middleware para permitir el uso de JSON
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("API is running");
});

mongoose
  .connect(MONGODB_URI, {
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
