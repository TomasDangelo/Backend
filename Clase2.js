class Usuario {
        constructor(nombre, apellido){  //El constructor es LO PRIMERO que se ejecuta cuando creamos una clase o "molde"
            this.nombre = nombre;
            this.apellido = apellido;
            this.libros = [];
            this.mascotas = [];
        }
        getFullName = () => {return(`Hola, mi nombre es ${this.nombre} ${this.apellido}`) }

        addMascota = (nombre) => {this.mascotas.push(nombre)}

        countMascotas = () =>{return (`cantidad de mascotas: ${this.mascotas.length}`)}

        addBook = (nombre, autor) =>{this.libros.push({nombre, autor})}

        getBookNames = () =>{return this.libros.map((libro) => {return libro.nombre})}

    }

let usuario1 = new Usuario("Tomás", "D'Angelo")

usuario1.addMascota("Rocco")   
usuario1.addMascota("Firulais")   
usuario1.addBook("Cien años de soledad","Gabriel García Márquez")
usuario1.addBook("Final del juego","Julio Cortázar")
usuario1.addBook("Martín Fierro","José Hernández")

console.log(usuario1.getFullName())    
console.log(usuario1.countMascotas())    
console.log(usuario1.getBookNames())    
  
   















/* 
En los parámetros colocamos lo que queremos que CAMBIE cada vez que creamos un nuevo usuario, por
ejemplo. En cambio, si queremos que un valor sea el mismo por defecto cada vez
 que creamos un nuevo Usuario (como por ejemplo, un contador en cero),
lo conveniente es declararlo como "this.conteo=0" ya como instancia PRIVADA (inaccesible para el usuario)

STATIC: es una variable estática que se compartirá entre todos los usuarios que se creen

THIS: Separa las instancias para que cada nuevo "Usuario" tenga exclusividad respecto a sus características y sea "consciente de si mismo", teniendo responsabilidades separadas; lo que suceda
en un usuario no tiene por qué relacionarse con otro. Sin embargo, se puede que todos los usuarios
compartan algo global a través de STATIC.
*/

            
            
            // const usuario = new Usuario("tomas", "dangelo", "tuvieja", "perro")