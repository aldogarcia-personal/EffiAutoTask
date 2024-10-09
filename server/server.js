// server/server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000; // Puedes cambiar el puerto si lo deseas

// Middleware para permitir el uso de JSON
app.use(cors());
app.use(express.json());

// Ruta de ejemplo
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el servidor Node.js!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
