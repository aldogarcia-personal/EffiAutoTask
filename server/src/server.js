// server/server.js
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware para permitir el uso de JSON
app.use(cors());
app.use(express.json());

export default app;
