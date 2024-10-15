const db = require("mongoose");
const connectDB = async () => {
  try {
    await db.connect("mongodb://localhost:27017/EffiAutoTask", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log("Error al conectar a la base de datos");
  }
};

export default connectDB;
