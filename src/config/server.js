const express = require('express'); //Framework para levantar el servidor
const path = require('path'); //Trabaja con las rutas del sistema operativo
const bodyParser = require('body-parser');
const { dbConnection } = require('./database');

const app = express();

// Configuraciones generales
app.set('port', process.env.PORT || 3000); //Configuración del puerto
app.set('view engine', 'ejs'); //Configuración del mortor de plantillas
app.set('views', path.join(__dirname, '../views')); //Le decimos donde estan las vistas 
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Archivos etáticos
app.use(express.static(path.join(__dirname, '../app/public')));

dbConnection();
module.exports = app;