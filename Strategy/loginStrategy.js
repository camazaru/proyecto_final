import {Strategy as LocalStrategy}  from 'passport-local'
import logger from "../components/winstonconfig.js"
import {indexController} from '../controller/indexController.js'
import bcrypt from 'bcrypt'
import {User} from '../models/userModels.js'


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

        const existingUser = await User.findOne({ email:username });
  
       console.log("encontrado",existingUser)


        if (existingUser) {
          return done(null, null);
        }
      
        console.log("encontrado",username)

        const newUser = {
            nickname: req.body.nickname,
            email: req.body.username,
            password: hashPassword(password),
            address: req.body.address,
            avatar: req.body.avatar,
            role:"USER"
        
        
        };

        console.log("estructura", newUser)
  
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
const registerStrategy = new LocalStrategy({passReqToCallback:true},
async (req,username,password,done)=>{
  
const{nickname,address} = req.body
    const {url , method, file} = req
      
    try{
       const newUser = {
            nickname,
            username,
            password: hashPassword(password),
            address,
            avatar: `${file.filename}`,
            role: "USER"
        }
       
        const createdUser = await indexController.userController.createUser(newUser)
      

        if(createdUser.error)
        {
            return done(null,null) 
              
        }
        const newCart = {
            userId: createdUser.id.toString(),
            products: [],
        }
        
        const createCart = await indexController.cartController.createCart(newCart)
        done(null,createdUser)


    } catch(error){
        logger.error(` Ruta ${method}${url} error al registrar usuario`)
        done(null,null)
    }
})

*/

const loginStrategy = new LocalStrategy(async (username,password,done)=>{
    try{
        const user = await indexController.accessController.Login({username})

        if(!user || !isvalidpassword(password,user.password)){
            //console.log("diferente")
            return done(null)
        }
        done(null,user)

    }catch(error)
    {
        logger.error('server.js error login')
        done('Error login',null)
    }

})

export const loginStrat = {
    registerStrategy,
    loginStrategy,
    logger,
    User
}
   
