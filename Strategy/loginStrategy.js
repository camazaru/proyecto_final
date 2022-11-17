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

const registerStrategy = new LocalStrategy({passReqToCallback:true},
async (req,username,password,done)=>{
    //console.log("dato 1", username)
const{usernam,address} = req.body
    const {url , method, file} = req
    try{
       
        const newUser = {
            username,
            password: hashPassword(password),
            nombre,
            direccion,
            avatar: `${file.filename}`
        }

        //console.log("dato existente", newUser)
        

        const createdUser = await userController.createUser(newUser)
        if(createdUser.error)
        {
            return done(null,null)   
        }
        const newCart = {
            userId: createdUser.id.toString(),
            products: [],
        }
        
        const createCart = await cartController.createCart(newCart)
        done(null,createdUser)
    } catch(error){
        res.json(new WSresponse(null, "error al registrar usuario", err, 500));
      }
})

const loginStrategy = new LocalStrategy(async (username,password,done)=>{
    try{
        const user = await accessController.Login({username})

        if(!user || !isvalidpassword(password,user.password)){
            //console.log("diferente")
            return done(null)
        }
        done(null,user)

    }catch(error)
    {
        res.json(new WSresponse(null, "server.js error login", err, 500));
      }


 })

export const loginStrat = {
    registerStrategy,
    loginStrategy,
    User
}
