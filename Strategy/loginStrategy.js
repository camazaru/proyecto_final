import {Strategy as LocalStrategy}  from 'passport-local'

//import {userController} from '../controller/indexController.js'
//import { cartController } from '../controller/indexController.js'

import {indexController} from '../controller/indexController.js'
import { WSresponse } from "../libs/WSresponse.js";
import bcrypt from 'bcrypt'
import {User} from "../models/userModels.js"

function hashPassword(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

function isValidPassword(reqPassword,dbPassword){
    return bcrypt.compareSync(reqPassword,dbPassword)
}

const registerStrategy = new LocalStrategy(
    { passReqToCallback: true },
    async (req, email, password, done) => {
console.log(uno)
       try {
        const existingUser = await User.findOne({ email });
  
        if (existingUser) {
          return done (null, null);
        }
  
        const newUser = {
          nickname,
          email: req.body.email,
          password: hashPassword(password),
          direccion: req.body.direccion,
          avatar: req.body.avatar,
        };
  
        const createdUser = await User.create(newUser);
        req.user = nickname;
        done(null, createdUser);
      } catch (err) {
        console.log("Error registrando usuario", err);
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

        const loginStrategy = new LocalStrategy(async (email, password, done) => {
            try {
console.log("dos")

              const user = await User.findOne({ email });
          
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
