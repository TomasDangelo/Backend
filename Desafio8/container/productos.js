class Productos {
    constructor(nombre) {
        this.nombre = nombre;
        this.fs = require('fs')
        this.productos = []
    }

    async listar(id) {
       try {
       this.productos = await this.leer()
       const listar = this.productos.filter((prod) => prod.id === id)
       if (listar) {return listar}  else {return []}
     } 
       catch (error) {console.log(error)}}


    async listarAll() {
        try {
        let prods = await this.fs.promises.readFile(this.nombre, 'utf8')
        return JSON.parse(prods)
        } catch (error) {console.log(error)}}

        async guardar(prod) {
            try{
            const leer = await this.fs.promises.readFile(this.nombre, 'utf8')
            const productos = JSON.parse(leer)
            productos.length === 0 ?  (id = 1) : (id = product[product.length - 1].id + 1)
            const productoNuevo = {...prod, id}
            productos.push(productoNuevo)
            await fs.writeFile(this.nombre, JSON.stringify(productos, null, 2) , 'utf8')
        }
            catch (error){
                if (error) throw new Error ("error guardando", error);
            }
                          }


    async leer() {
        try {
        let prods = await this.fs.promises.readFile(this.nombre, 'utf-8')
        return JSON.parse(prods)}
        catch(error) {return []}}


    async actualizar(prod, id) {
        try {
            this.productos = await this.leer()
            const existe = this.productos.find(producto => producto.id === id)
            if (existe){
            prod.price *= 1.20
            }
            
           } catch (error) {console.log(error)}

    }

    async borrar(id) {
        const borrar = this.productos.find(prod => prod.id === id)
        borrar? this.productos.splice(indexOf(borrar), 1) : "no existe ese objeto"}}


module.exports = Productos