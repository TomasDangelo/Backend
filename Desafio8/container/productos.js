class Productos {
    constructor(nombre) {
        this.nombre = nombre;
        this.fs = require('fs')
        this.productos = []
    }

    async listar(id) {
       try {
       this.productos = await this.listarAll()
       const listar = this.productos.filter((prod) => prod.id === id)
       if (listar) {return listar}  else {return false}
     } 
       catch (error) {console.log(error)}}


    async listarAll() {
        try {
        let prods = await this.fs.promises.readFile(this.nombre, 'utf8')
        return JSON.parse(prods)
        } catch (error) {console.log(error)}}

    async guardar(prod) {
            try{
            let id;
            const productos = await this.listarAll()
            productos.length === 0 ?  (id = 1) : (id = productos[productos.length - 1].id + 1)
            prod.id = id;
            productos.push(prod)
            await this.fs.promises.writeFile(this.nombre, JSON.stringify(productos, null, 2))
            return prod
            }
            catch (error){console.log("error actualizando", error)}
        }

    async actualizar(id, producto) {
        try {
            let prods = await this.fs.promises.readFile(this.nombre, 'utf8')
            let prodsJSON = JSON.parse(prods)
            const existe = prodsJSON.find((prod) => prod.id === id)
            if (existe){
                const prodsFiltrados = prodsJSON.filter((prod) => prod.id != id)
                const newProd = {id, ...producto}
                let productos = [newProd, ...prodsFiltrados,]
                await this.fs.promises.writeFile(this.nombre, JSON.stringify(productos, null, 2))
                return newProd
            } 
            else {
            return false}
            } catch(error){console.log("error actualizando")}

    }

    async borrar(id) {
    try {
    let prodsParsear = await this.fs.promises.readFile(this.nombre, 'utf8')
    let prods = JSON.parse(prodsParsear)
    const filtrar = prods.filter(prod => prod.id === Number(id))
    if (!filtrar){return false} 
    let productosFinal = prods.filter(prod => prod.id !== Number(id))
    await this.fs.promises.writeFile(this.nombre, JSON.stringify(productosFinal, null, 2))
} 
    catch(error){throw new Error(error)}
    }
}


module.exports = Productos