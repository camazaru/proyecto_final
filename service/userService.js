import { userDao } from "../dao/userDao.js";
import bcrypt from "bcrypt";
import jwt from "../utils/jwt.js"
import { json } from "express";


const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const isValidPassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(hashedPassword, plainPassword);
};


const createUser = async ({ username, email, password, address, avatar }) => {
  await userDao.createUser({ username, email, password, address, avatar });
  return { username, email, password, address, avatar };
};


const getUserByMail = async(mail) =>{

  const user = await userDao.getUserByMail(mail);

  return user
}



export const userService = { createUser, getUserByMail };