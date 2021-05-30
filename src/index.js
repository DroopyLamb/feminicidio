require('dotenv').config(); // Configuración de variables de entorno
const port = process.env.PORT;

//Archivo que arranca la aplicación
const app = require('./config/server'); //Archivo de configuración de express
require('./routes/routes')(app);


//iniciar el serevidor

app.listen(port, () => {
    console.log(`Server on Port: ${port}`);
});