const express = require('express');
const {Router} = express;
const PORT = 8080
const Productos = require('./container/productos')
const archivo = new Productos('productos.json')

//SETEO DEL ROUTER Y DE LA CLASS
const routerProds = new Router();
const productosApi = new Productos();

routerProds.use(express.json())
routerProds.use(express.urlencoded({extended: true}))


//SET DEL SERVER
const app = express();
app.use('/static' , express.static(__dirname + '/public')) //Ruta estática para el HTML con path absoluto


routerProds.get('/', async (req, res) =>{  //Devolver todos los productos
    const leer = await archivo.listarAll()
    res.send(leer)
})

routerProds.get('/:id', async (req, res) =>{
    const { id } = req.params
    const obtenerPorId = await archivo.listar(parseInt(id))
    res.send(obtenerPorId)
})

routerProds.post('/', async (req, res) =>{
    const { productoPostman } = req.body
    const guardar = await archivo.guardar(productoPostman)
    res.send(guardar)
})

routerProds.put('/:id', (req, res) =>{
    res.send({productos: id})
})

routerProds.delete('/:id', (req, res) =>{
    res.send({productos: id})
})


app.use('/api/productos' , routerProds) //Ruta raíz de la api


//Mensaje de conexión al servidor
const server = app.listen(PORT, () =>{
    console.log(`Server express funcionado bien en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))
