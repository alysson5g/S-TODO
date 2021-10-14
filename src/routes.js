import { Router } from "express";

import { GenericError } from './app/class/Error';


const routes = new Router();


routes.get('/', (req, res, next) => {
    try {

        throw new GenericError();
    } catch (error) {
        next(error);
    }
});

export default routes;