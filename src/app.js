import express from 'express';
import cors from 'cors';

import routes from './routes';
import './database';
import './config/redisconfig';
import errorHandler from './app/middlewares/error';
import notFoundError from './app/middlewares/notFoundError';

require('dotenv').config()

class App {
    constructor() {
        this.server = express();
        this.cors();
        this.routes();
        this.middlewares();

    }

    cors() {
        this.server.use(
            cors({
                origin: 'http://localhost:3000',
                methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
                preflightContinue: false,
                optionsSuccessStatus: 204,
            })
        );
        this.server.use(express.json());
    }


    middlewares() {
        //  this.server.use((req, res, next) => {
        //   next(createError(404));
        //  });
        this.server.use(notFoundError);
        this.server.use(errorHandler);
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;