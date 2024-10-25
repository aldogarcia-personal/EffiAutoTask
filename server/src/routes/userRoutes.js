import express from "express";
import { checkUser } from "../services/useService.js";
import User from "../models/users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const user = await checkUser(identifier, password);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al conectar" });
  }
});

export default router;
