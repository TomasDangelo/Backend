const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const devolverNombres = productos.map((prod) => prod.nombre)
const devolverJuntos = devolverNombres.join(',')


const precioTotal = productos.reduce((total, prod) => {
   const price = total + prod.precio
    return parseFloat(price.toFixed(2))
}, 0)
console.log(precioTotal)

const dividir = precioTotal/productos.length
const promedio = parseFloat(dividir.toFixed(2))


const getMinPrice = () => {
    let min = productos[0].precio
    let prod = productos[0]
    for (const producto of productos) {
        if (producto.precio < min) {
            min = producto.precio
            prod = producto
        }
    }
    return prod
}
const getMaxPrice = () => {
    let max = productos[0].precio
    let prod = productos[0]
    for (const producto of productos) {
        if (producto.precio > max) {
            min = producto.precio
            prod = producto
        }
    }
    return prod
}


const objeto ={
    nombres: devolverJuntos, 
    totalPrice: precioTotal,
    average: promedio,
    minPrice: getMinPrice(),
    maxPrice: getMaxPrice()
}

console.log(objeto)
