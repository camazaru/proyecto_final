import express, { json } from "express";
import session from "express-session"
import mongoose from "mongoose";
import config from './config.js';                      //
import router from '../routes/indexRoute.js'
import path from "path"                                //Normalizar Rutas
import {fileURLToPath} from 'url';                     //Normalizar Rutas
const __filename = fileURLToPath(import.meta.url);     //Normalizar Rutas
const __dirname = path.dirname(__filename);            //Normalizar Rutas
import { Server } from "socket.io";
import compression from 'compression'
import {loginStrat} from '../Strategy/loginStrategy.js'
import passport from 'passport';
import {indexController} from "../controller/indexController.js"
import connectDB from './controllersdb.js'

const app = express()
app.set('view engine', 'pug')                                              //usar pug
const port = process.env.PORT || 5000

const servidor = app.listen(port)
console.log(`Server listening on port ${port}`)

app.use(json());
app.use(compression())
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: config.api.apisecret,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        httpOnly:false,
        secure: false,
        maxAge: config.api.tiemposession
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,

  }))
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use('register',loginStrat.registerStrategy)
  passport.use('login',loginStrat.loginStrategy)
  
  passport.serializeUser((user,done)=>{
     
      done(null,user.id)
  })
  
  passport.deserializeUser((id,done)=>{
    loginStrat.User.findById(id,done)
  })

  app.use(express.static(path.join(__dirname, '../views')))
  app.use(express.static('avatars'))
  app.use(express.static('productsImg'))

  // Usar Rutas
app.use("/", router)

connectDB(config.database.dbUrl, (err) => {
    if (err) return loginStrat.logger.error("DB Connection error", err);
    console.log("DB Connected");
  })
  
  const expressServer = servidor
  const io = new Server(expressServer);
  
  let messagesArray = []
  io.on('connection', async socket => {
    messagesArray = await MensajesController.ReadMensajes()
    socket.emit('server:mensajes', messagesArray)
    socket.on('client:menssage', async messageInfo => {
        await MensajesController.createMensaje(messageInfo)
        messagesArray = await MensajesController.ReadMensajes()
        io.emit('server:mensajes', messagesArray)
    })
  })





/*

import bodyParser from "body-parser"


//import os from "os";


import { url } from 'inspector';

import { WSresponse } from "../libs/WSresponse.js";










function hashPassword(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

function isvalidpassword(reqPassword,dbPassword){
    return bcrypt.compareSync(reqPassword,dbPassword)
}



app.use(express.static('public'))




function print(objeto)
{
    console.info(util.inspect(objeto,false,12,true))
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

  app.use(express.static('avatars'))
  app.use(express.static('productsImg'))



app.use(compression())

app.use(express.json());



//app.use(express.urlencoded({ extended: true }));                     // lee datos de un formulario









*/


