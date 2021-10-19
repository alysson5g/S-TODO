import { Router } from "express";

import UsersAdminController from './app/controllers/UsersAdminController';
import TodoListsController from "./app/controllers/TodoListsController";
import TodoEntriesController from "./app/controllers/TodoEntriesController";



import authMiddleware from './app/middlewares/auth';
import SessionController from "./app/controllers/SessionController";
import RefreshtokenController from "./app/controllers/RefreshtokenController";


const routes = new Router();





routes.post('/create/users', UsersAdminController.store);


routes.post('/sessions', SessionController.store);

routes.post('/refresh', RefreshtokenController.store);

routes.use(authMiddleware);

routes.post('/create/todolist', TodoListsController.store);
routes.post('/create/todoentries', TodoEntriesController.store);

//routes.get('/list/users', UsersAdminController.index);

//routes.put('/users/:id', UsersAdminController.update);



export default routes;