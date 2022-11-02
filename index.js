import router from './router/index.js';
import express from 'express';
//const express = require('express');
import db from './config/db.js';

import dotenv from 'dotenv/config'



console.log(process.env.DB_HOST)

const app = express();

db.authenticate()
    .then ( ()=> console.log('Base de datos conectada'))
    .catch( error => console.error(error));

const port = process.env.PORT || 4000;
//habilitar pug
app.set('view engine', 'pug');


//Obtener el año actuales


app.use((req, res, next) =>{

    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    return next();
});

//agregar body parser para  leer los datos del formulario

app.use(express.urlencoded({extended: true}));

// definir la carpeta publica
app.use(express.static('public'));


//agregar router

app.use('/', router);
app.listen(port, ()=> {
    console.log(`EL servidor esta funconando correctamente en el puerto ${port}`);
});


