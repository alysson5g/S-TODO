import { Router } from "express";

import UsersAdminController from './app/controllers/usersAdminController';

import { GenericError } from './app/class/Error';
import authMiddleware from './app/middlewares/auth';

import SessionController from "./app/controllers/SessionController";
import RefreshtokenController from "./app/controllers/RefreshtokenController";


const routes = new Router();



routes.get('/', (req, res, next) => {
    try {

        throw new GenericError();
    } catch (error) {
        next(error);
    }
});

routes.post('/sessions', SessionController.store);

routes.post('/refresh', RefreshtokenController.store);

routes.use(authMiddleware);

//routes.get('/list/users', UsersAdminController.index);
routes.post('/create/users', UsersAdminController.store);
//routes.put('/users/:id', UsersAdminController.update);



export default routes;