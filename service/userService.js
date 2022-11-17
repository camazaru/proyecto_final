import { userDao } from "../dao/userDao.js";
import bcrypt from "bcrypt";
import jwt from "../utils/jwt.js"
import { json } from "express";
import { User } from "../models/userModels.js";


const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const isValidPassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(hashedPassword, plainPassword);
};


const createUser = async (req,res) => {
  const filters = req.email ; 

  console.log("aqui", filters)
  const existingUser = await User.findOne({username:filters});
  if (existingUser) {
    return JSON.stringify(new CustomError(false, "Email already in use", true, 400));
      }
      const createdUser = await User.create({
        username: req.username,
        email: req.email,
        password: req.password,
        address: req.address,
        avatar: req.avatar
      }); 
    return createdUser
      
    };





const getUserByMail = async(mail) =>{

  const user = await userDao.getUserByMail(mail);

  return user
}



/***************/
const getUserOneByFilter = async (filters) => {
  const user = await User.findOne(filters);
  return user
}




export const userService = { createUser, getUserByMail, getUserOneByFilter }
