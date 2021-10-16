import { Router } from "express";

import UsersAdminController from './app/controllers/usersAdminController';

import { GenericError } from './app/class/Error';


const routes = new Router();


routes.get('/', (req, res, next) => {
    try {

        throw new GenericError();
    } catch (error) {
        next(error);
    }
});

//routes.get('/list/users', UsersAdminController.index);
routes.post('/create/users', UsersAdminController.store);
//routes.put('/users/:id', UsersAdminController.update);



export default routes;