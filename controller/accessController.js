import {userService} from '../service/userService.js'
import { WSresponse } from "../libs/WSresponse.js";
import path from 'path';
import {fileURLToPath} from 'url';
import checkAuthentication from "../Strategy/CheckAuth.js"
import {loginStrat} from "../Strategy/loginStrategy.js"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const Login = async(req, res)=>{
  const {url , method} = req

  try{
      {
          const filters = req
          const response = await userService.getUserOneByFilter(filters)
          return response
        }
  }
  catch(err){
    res.sendStatus(500);
  }
}

const getLogin = async (req, res) => {
    if (req.isAuthenticated()) {
      var user = req.user;
      res.redirect('/product');
    } else {
      res.render("login", {} );
    }
  }

  const getRegister = async(req, res)=>{
    const {url , method} = req

    try{
        { 
          res.render("register", {} );
        }
    }
     catch(err){
      console.log(err);
      res.json(new WSresponse(null, err, true, 489));
    }
}


const postLogin = async (req, res) => {
    let user = req.user;
    res.redirect('/product');
    //res.sendFile(path.join(__dirname,"../views/.html"));
}
export const accessController = {
    Login,
    getLogin,
    postLogin,
    getRegister
    
}

