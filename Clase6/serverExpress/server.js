/* Instalamos express como dependencia y nodemon como dependencia de desarrollo */
const express = require('express');

const app = express();


let visitas = 0 

app.get('/' , (req, res) => { /* Obtenemos el endpoint, en este caso es home, pero podría ser, por ejemplo, /productos/remeras */
    res.send(`<h1 style="color:blue">   Hola mundo  </h1>`);
})

app.get('/visitas' , (req, res) =>{
    visitas += 1
    res.send(`La cantidad de visitas es: ${visitas}`)
})

app.get('/fyh' , (req, res) =>{
    const date = new Date()
    res.send(date.toLocaleDateString())
})



const PORT = 8080
/* Configuramos el puerto */
const server = app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
})

// Escuchamos un evento en caso de error

server.on('error' , error => {console.log(`error en el servidor ${error}`)})