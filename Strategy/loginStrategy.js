import {Strategy as LocalStrategy}  from 'passport-local'
import {userController} from '../controller/indexController.js'
import { cartController } from '../controller/indexController.js'

import {accessController} from '../controller/indexController.js'
import { WSresponse } from "../libs/WSresponse.js";
import bcrypt from 'bcrypt'
import {User} from "../models/userModels.js"

function hashPassword(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

function isvalidpassword(reqPassword,dbPassword){
    return bcrypt.compareSync(reqPassword,dbPassword)
}

const registerStrategy = new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      try {
        const existingUser = await User.findOne({ username });
  
        if (existingUser) {
          return done(null, null);
        }
  
        const newUser = {
          nickname,
          email: req.body.email,
          password: hashPassword(password),
          direccion: req.body.direccion,
          avatar: req.body.avatar,
        };
  
        const createdUser = await User.create(newUser);
        req.user = username;
        done(null, createdUser);
      } catch (err) {
        console.log("Erro registrando usuario", err);
        done("Erro en registro", null);
      }
    }
  );
/*
        const newCart = {
            userId: createdUser.id.toString(),
            productos: [],
        }
 */

        const loginStrategy = new LocalStrategy(async (username, password, done) => {
            try {
              const user = await User.findOne({ email:username });
          
              if (!user || !isValidPassword(password, user.password)) {
                return done(null, null);
              }
          
              done(null, user);
            } catch (err) {
              console.log("Error login", err);
              done("Error login", null);
            }
          });

        

export const loginStrat = {
    registerStrategy,
    loginStrategy,
   
    User
}
