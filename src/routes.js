import { Router } from "express";

import UsersController from './app/controllers/UsersController';
import TodoListsController from "./app/controllers/TodoListsController";
import TodoEntriesController from "./app/controllers/TodoEntriesController";



import authMiddleware from './app/middlewares/auth';
import SessionController from "./app/controllers/SessionController";
import RefreshtokenController from "./app/controllers/RefreshtokenController";


const routes = new Router();





routes.post('/create/users', UsersController.store);
routes.post('/create/users/admin', UsersController.Createadmin);

routes.post('/sessions', SessionController.store);

routes.post('/refresh', RefreshtokenController.store);

routes.use(authMiddleware);

routes.post('/create/todolist', TodoListsController.store);
routes.post('/create/todoentries', TodoEntriesController.store);

routes.put('/complete/todoentries', TodoEntriesController.completeTodo);

routes.put('/update/todoentries', TodoEntriesController.updateTodo);

routes.get('/todos', TodoEntriesController.index);
//routes.put('/users/:id', UsersAdminController.update);
routes.get('/todos/user', TodoEntriesController.indexMyTodo);


export default routes;