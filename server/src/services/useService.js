import User from "../models/users.js";

const checkUser = async (identifier, password) => {
  try {
    const user = await User.findOne({
      $or: [{ email: identifier }, { name: identifier }],
    });
    if (user && user.password === password) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.log("error al buscar usuario: ", error);
    throw error;
  }
};
