import { formatISO } from 'date-fns'

import { Op } from 'sequelize';
import Todoentries from '../models/TodoEntries';


import users from '../models/Users';

class ServicetodoEntries {
    async Createtodoentries(data) {
        console.log('enter create todoEntries');



        const result = {
            title: data.title,
            todolists_id: data.todolists_id,
            user_id: data.user_id,
            description: data.description,
            due_date: data.due_date,
            completed: data.completed,
            enabled: data.enabled,
        };


        const newtodoEntries = await Todoentries.create(result);
        return newtodoEntries;

    }

    async Completetodoentries(data) {
        console.log('enter Complete todoEntries');


        const date = formatISO(new Date())

        const Todo = await Todoentries.findByPk(data.id);


        const completeTodo = {

            title: Todo.title,
            todolists_id: Todo.todolists_id,
            user_id: Todo.UserID,
            description: Todo.description,
            due_date: Todo.due_date,
            completed: data.completed,
            completed_date: date,
            enabled: Todo.enabled,
        }

        const resultCompleteTodo = await Todo.update(completeTodo);



        return resultCompleteTodo;

    }


    async Updatetodoentries(data) {
        console.log('enter Update todoEntries');




        const Todo = await Todoentries.findByPk(data.id);

        if (Todo.completed === true) {
            throw ({ message: ('The Todo is completed, so you cannot change it.') });



        }




        const updateTodo = {

            title: data.title,
            todolists_id: data.todolists_id,
            user_id: data.UserID,
            description: data.description,
            due_date: data.due_date,


        }

        const resultUpdateTodo = await Todo.update(updateTodo);



        return resultUpdateTodo;

    }

    async findAdmTodo(data) {

        const typeUser = await users.findByPk(data.userId);

        if (typeUser.profile_admin === false) {
            throw ({ message: ('Access denied, login as an admin user.') });



        }

        const { page = 1 } = data.query;



        let condition = {

            due_date: {
                [Op.lt]: new Date()
            }
        }


        if (!data.body.filter) {
            condition = {};
        }
        console.log('condition', condition);

        const listTodosEntries = await Todoentries.findAll({
            where: condition,
            order: ['due_date'],
            attributes: ['id', 'title', 'description', 'due_date', 'status'],
            limit: 20,
            offset: (page - 1) * 20,
            include: [
                {
                    model: users,
                    attributes: ['email']
                }
            ]
        });

        return listTodosEntries;

    }

    async findMyTodo(data) {

        const { page = 1 } = data.query;



        const listTodosEntries = await Todoentries.findAll({
            where: { user_id: data.userId, },
            order: ['due_date'],
            attributes: ['id', 'title', 'description', 'due_date', 'status'],
            limit: 20,
            offset: (page - 1) * 20,
            include: [
                {
                    model: users,
                    attributes: ['email']
                }
            ]
        });

        return listTodosEntries;

    }

}


export default ServicetodoEntries;
