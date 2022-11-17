import { WSresponse } from "../libs/WSresponse.js";
import {userService} from "../service/userService.js";

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    res.json(new WSresponse(response, "User created"));
  } catch (err) {
    res.json(new WSresponse(null, "Error creating user", err, 500));
  }
};



const getUserByMail = async (req, res) => {
  try {
    const response = await userService.getUserByMail(req.params.mail);
    res.json(new WSresponse(response, "User finded"));

  } catch (err) {
    res.json(new WSresponse(null, "Error creating user", err, 500));
  }
};

export const userController = { 
  createUser, 
  getUserByMail,
  //login
};

