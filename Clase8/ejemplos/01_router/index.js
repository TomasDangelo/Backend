const express = require('express');
const { Router } = express;

const app = express();
const router = new Router();

// Tenemos dos rutas distintas, pero la idea es separarlas para modularizar y exportarlas/importarlas
router.get('/productos', (req, res) => {
    res.send('ruta de prods!')
})

router.get('/usuarios', (req, res) => {
    res.send('ruta de usuarios!')
})

//ruta raíz
app.use('/api', router)

app.listen(8090, () => {
    console.log('server funcionado bien')
})

