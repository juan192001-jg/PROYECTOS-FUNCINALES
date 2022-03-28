import express from 'express';
import cors from 'cors';

class Server {
    constructor() {
        //servidor
        this.port = process.env.PORT;
        this.app = express();
        //conecion a base de datos

        // midlewares
        this.middelwares();
        //rutas o routes 

    }

    middelwares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor coriendo en puerrto ${process.env.PORT}`)
        })
    }
}
export default Server