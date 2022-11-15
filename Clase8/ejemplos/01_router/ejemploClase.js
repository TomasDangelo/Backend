const express = require('express');
const { Router } = express;
const app = express();

app.use(express.json()) //middleware --> Permite leer archivos json 
app.use(express.urlencoded({ extended: true }))

const routerMascotas = new Router();
const routerPersonas = new Router();

//Ruta de MASCOTAS
const mascotas = []

routerMascotas.get('/' , (req, res) =>{
    res.json({mascotas: mascotas})
})

routerMascotas.post('/' , (req, res) =>{
    console.log('ingresar la mascota')
    mascotas.push(req.body) //Como es post, hacemos req.body
    res.json('Se guardó la mascota!')
})
//Ruta de PERSONAS
const personas = []

routerPersonas.get('/' , (req, res) =>{
    res.json({personas: personas})
})

routerPersonas.post('/' , (req, res) =>{
    console.log('ingresar la persona')
    personas.push(req.body) /
    res.json('Se guardó la persona!')
})


//rutas raíz
app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)


app.listen(8090, () => {
    console.log('server funcionado bien')
})

