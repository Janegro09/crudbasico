const express = require('express');
var cors = require('cors');


class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'


        // Middleware
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio public
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando el puerto ', this.port)
        })
    }

}

module.exports = Server