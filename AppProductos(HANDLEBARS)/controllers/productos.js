const fs = require('fs')

const json_productos = fs.readFileSync('productos.json', 'utf-8')
let productos = JSON.parse(json_productos)

module.exports = {

    formProduct: (req,res) => {
        res.render('nuevoProducto')
    },
    
    listProduct: (req,res) => {
        res.render('listaProducto', {layout:'listaProducto', productos })
    },

    newProduct: (req,res) => {
        const {title,price,thumbnail} = req.body
    
            if(title && price && thumbnail){
                const id = productos.length + 1
                const nuevoProducto = {id, ...req.body}
                productos.push(nuevoProducto)
                // res.redirect('/')
                const json_productos = JSON.stringify(productos)
                fs.writeFileSync('productos.json', json_productos, 'utf-8')
                res.render('listaProducto', {layout:'listaProducto', productos })
            }else {
    
                res.status(500).json({error: "No se pudieron guardar los datos."})  
    
            }
    }

}
