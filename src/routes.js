import { Router } from "express";

import UsersController from './app/controllers/UsersController';
import TodoListsController from "./app/controllers/TodoListsController";
import TodoEntriesController from "./app/controllers/TodoEntriesController";



import authMiddleware from './app/middlewares/auth';
import SessionController from "./app/controllers/SessionController";
import RefreshtokenController from "./app/controllers/RefreshtokenController";


const routes = new Router();




// Criar Usuário
routes.post('/web/v1/signup', UsersController.store);

//Criar Usuário Administrador
routes.post('/web/v1/signup/admin', UsersController.Createadmin);

// Login
routes.post('/web/v1/signin', SessionController.store);

//RefreshToken
routes.post('/web/v1/refresh', RefreshtokenController.store);

//Autenticação
routes.use(authMiddleware);

//Criar Lista de TODOS
routes.post('/web/v1/todolist/create', TodoListsController.store);


//Rotas de TODOS

// Criar TODOS
routes.post('/web/v1/todoentries/create', TodoEntriesController.store);

//Finalizar TODO
routes.put('/web/v1/todoentries/complete', TodoEntriesController.completeTodo);

//Alterar TODO
routes.put('/web/v1/todoentries/update', TodoEntriesController.updateTodo);

//Listar todos os TODOS para o Administrador
routes.get('/web/v1/todoentries', TodoEntriesController.index);

//Listar todos os todos criados pelo usuário logado
routes.get('/web/v1/todoentries/user', TodoEntriesController.indexMyTodo);


export default routes;
