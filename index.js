const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + "/public/"));
app.listen(port, function() {
    console.log("Servidor web iniciado en puerto 3000. https://localhost:3000//");
});