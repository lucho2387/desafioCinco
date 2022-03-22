const express = require('express')
const morgan = require('morgan')
// const multer = require('multer')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()


// Configuracion de handlebars
app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'nuevoProducto.hbs',
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials/"
    })
)

// Configuracion
app.set('port', process.env.PORT || 8080)
app.set('views', path.join(__dirname, 'views/layouts'))
app.set('view engine', 'hbs');
 
// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use(require('./routes/rutas'))

//Static Files
app.use(express.static(path.join(__dirname, 'public')));


// Inicio del Servidor
const server = app.listen(app.get('port'), () => {
    console.log(`Servidor http escuchando en el puerto ${app.get('port')}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))