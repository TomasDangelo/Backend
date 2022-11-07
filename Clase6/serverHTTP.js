const http = require('http');

const getMensaje = () => {
    const horaActual = new Date().getHours();

    if      (horaActual >= 6 && horaActual <= 12) {return ("buenos días!!!!")} 
    else if (horaActual >= 13 && horaActual <= 19){return ("buenas tardes!!!!")} 
    else    {return                                       ("buenas noches!!!!")}

}

const server = http.createServer((request, response) => {
    response.end(getMensaje())
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor corriendo en el puerto 8080`)
})

