const fs = require('fs').promises

class Contenedor {
    constructor (path){
        this.nombreArchivo = path;
        this.productos = [];
     }

     async save(producto) {
        try {
         const read = await fs.readFile(this.nombreArchivo, 'utf8');
         const product = JSON.parse(read)
         let id;
         product.length === 0 ?  (id = 1) : (id = product[product.length - 1].id + 1)

         /* Recordar: Si no hay nada, el id será 1. Si hay, accedo al id del último objeto con su índice (ej: [2]), le 
         resto 1 a ese índice (porque el length no cuenta desde 0) y ahí le agrego 1 para que el id siempre 
         sea 1+ que el objeto anterior  */

         const prodNuevo = {...producto , id}
         product.push(prodNuevo)
         await fs.writeFile(this.nombreArchivo, JSON.stringify(product, null, 2) , 'utf8')
         return prodNuevo.id
      }
       catch (err) {
           if (err) throw new Error ("error guardando", err);
        }
     }

     async getId(id){
       try {
       const leer =  await fs.readFile(this.nombreArchivo, 'utf8');
       const data = JSON.parse(leer)
       const objeto = data.find(obj => obj.id === id)
         if (!objeto) { return null } else { return objeto }
       } 
       catch (error) {
         console.log(error)
       }  
     }

     async getAll(){
         try {
            const read = await fs.readFile(this.nombreArchivo, 'utf8');
            return JSON.parse(read)
         } catch (error) {
            if (error) throw new Error ("error al obtener todos los prods")
         }
     }

     async deleteById(id){
      try {
         const read = await fs.readFile(this.nombreArchivo, 'utf-8')
         const data = JSON.parse(read)
         const objeto = data.find(obj => obj.id === id)
         if (objeto) {data.splice(data.indexOf(objeto), 1)}
         await fs.writeFile(this.nombreArchivo, JSON.stringify(data, null, 2), 'utf-8')
         /* Si existe el objeto con ese id, lo elimino */
      } catch (error) {
         if (error) throw new Error ("error al borrar")
      }
     }

     async deleteAll(){
        try {
         await fs.writeFile(this.nombreArchivo, JSON.stringify([], null , 2), "utf-8" ) 
         /* Borramos todo, al sobreescribir el array vacío */
         
        } catch (error) {
         if (error) throw new Error ("error borrando");
        }
     }

}

module.exports = Contenedor