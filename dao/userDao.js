import { User } from "../models/userModels.js";

const createUser = async (userToCreate) => {
  const createdUser = await User.create({ ...userToCreate, role: "USER" });
  return createdUser;
};

const getUserByMail = async (mail) => {
  const user = await User.findById(mail);
  return user;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);

  return user;
};


export const userDao = { createUser, getUserByMail, getUserById };
