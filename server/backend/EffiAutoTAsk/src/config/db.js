import mongoose from "mongoose"

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined")
    }

    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
    })

    console.log("Conectado a la base de datos")
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message)
    throw error
  }
}

export default connectDB
