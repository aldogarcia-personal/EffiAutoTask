// server/index.js
import express from 'express';

const app = express();
const PORT = 5000; // Puedes usar otro puerto si lo prefieres

// Middleware para permitir el uso de JSON
app.use(express.json());

// Una ruta de ejemplo
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el servidor Node.js!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

