import express, { application } from 'express'
import session from "express-session"
import compression from 'compression'
//import passport from 'passport';
import bodyParser from "body-parser"
//import os from "os";
import { json } from "express";
import path from "path"                                //Normalizar Rutas
import {fileURLToPath} from 'url';                     //Normalizar Rutas
import { url } from 'inspector';
//import datosLogin from '../Strategy/loginStrategy.js'
import { WSresponse } from "../libs/WSresponse.js";
import config from './config.js';                      // 
import connectDB from './controllersdb.js'

import router from '../routes/indexRoute.js'

const __filename = fileURLToPath(import.meta.url);     //Normalizar Rutas
const __dirname = path.dirname(__filename);            //Normalizar Rutas

const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.use(json());

function print(objeto)
{
    console.info(util.inspect(objeto,false,12,true))
}

connectDB(config.database.dbUrl, (err) => {
  if (err) return datosLogin.logger.error("DB Connection error", err);
  console.log("DB Connected");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'pug')                                              //usar pug

app.use(compression())
app.use(express.static(path.join(__dirname, '../views')))
app.use(express.json());



//***********************************************************************************************************
// Usar Rutas
app.use("/", router)


//***********************************************************************************************************

//app.use(express.urlencoded({ extended: true }));                     // lee datos de un formulario
app.use(express.static('avatars'))


app.use(session({
    secret: config.api.apisecret,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie:{
        httpOnly:false,
        secure: false,
        maxAge: config.api.tiemposession,
    }
}))


app.listen(port)
console.log(`Server listening on port ${port}`)

