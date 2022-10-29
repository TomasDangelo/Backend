const Contenedor = require('./desafio.js')
const acceder = new Contenedor('./productos.JSON')

async function crear (){
    const prod1 = {
        title: "Remera",
        price: 150,
        thumbnail: "http://remera.../images/",
        }
    const prod2 = {
        title: "Camisa",
        price: 950,
        thumbnail: "http://camisa.../images/",
        }
    const prod3 = {
        title: "Jean",
        price: 550,
        thumbnail: "http://jean.../images/",
        }


    /* Recordatorio para desafío: si ejecuto todos los métodos como están ordenados ahora, el archivo
       .json va a aparecer vacío porque el último método borra todos. Lo ideal es ejecutar un método a la vez
       para ver los resultados */

        /* Primero, guardo los productos */
       await acceder.save(prod1) .then(prod => console.log(prod)) .catch(err => console.log(err))
       await acceder.save(prod2) .then(prod => console.log(prod)).catch(err => console.log(err))
       await acceder.save(prod3) .then(prod => console.log(prod)).catch(err => console.log(err))

        /* Después, accedo a un objeto por ID (2 en este caso) */
       await acceder.getId(2) .then(prod => console.log(prod)).catch(err => console.log(err))

       /* Accedo a todos los objetos que existan en el json */
       await acceder.getAll() .then(prod => console.log(prod)).catch(err => console.log(err))

        /* Borro el objeto con id 2 */
       await acceder.deleteById(2) .then(prod => console.log(prod)).catch(err => console.log(err))

        /* Borro todo */
       await acceder.deleteAll() .then(prod => console.log(prod)).catch(err => console.log(err))
}

crear()

