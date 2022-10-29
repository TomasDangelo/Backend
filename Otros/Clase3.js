const fs = require('fs');   /* Siempre se requiere este método de node*/

/* CREACIÓN DE ARCHIVO SÍNCRONA */
try {
    const fecha = new Date().toLocaleDateString();
    fs.writeFileSync("./fyh.txt" , fecha)
} catch (error) {
   throw new Error("Error al leer este archivo")
}

/* LECTURA DE ARCHIVO SÍNCRONA */
try {
    const data = fs.readFileSync("./fyh.txt" , "UTF-8")
    console.log(data)
} catch (error) {
    throw new Error("Error al leer este archivo")
}


/* LECTURA ASÍNCRONA */

fs.readFileSync("fyh.txt", "utf-8", (error, contenido) => {
    if(error) throw new Error("Error al leer este archivo")
    
    console.log("Lectura exitosa del archivo")  /* Si no hay error, es pq se ejecutará el archivo*/
    console.log(contenido)
})
/* CREAR UN NUEVO DIRECTORIO con mkdirSync */

fs.mkdirSync("./prueba", error =>{  /* Como todavía no tiene contenido solo manejamos el error */
    if (error) throw new Error("Error al crear directorio")
    console.log("Directorio creado!")
})

/* LEER EL NUEVO DIRECTORIO */

fs.readdir("./prueba" , (error, contenido) =>{
    if (error) throw new Error("Error")
    console.log(contenido)
})


/* PROMESAS */
async function readFile(){
    try {
        const contenido = await fs.promises.readFile("test.txt", "utf-8")
        console.log(contenido)
    } catch (error) {
        console.log("error")
    }
}

readFile();


// Lectura archivo .json (creado con npm init -y)
fs.readFile("./package.json" , "utf-8", (error, contenido) => {
    if(error) throw new Error("Error al leer archivo")
    console.log(contenido)

    const info = {
        contenidoStr: contenido,
        contenidoObjeto: JSON.parse(contenido),
        size: contenido.length,
    }
    console.log(info)
/* Creamos un archivo txt y guardamos la data obtenida del .json como objeto  */
    fs.writeFile("newInfo.txt", JSON.stringify(info, null, 2), error => {
        if(error) throw new Error("Error")
    }
})





/*  FORMA SÍNCRONA */
/*Para LEER archivos, se utiliza UTF-8 como parámetro de lectura y readFileSync como método
Para CREAR archivos, usamos writeFileSync
El try/catch nos sirve para manejo de errores y de excepciones
Actualizar: appendFileSync
Borrar: unLinkFileSync  */

/* FORMA ASÍNCRONA
Para leer los archivos con readFile, ahora recibe 3 parametros: 
(localizacion del arhcivo, código UTF-8 y un CALLBACK para manejo de errores)

*/