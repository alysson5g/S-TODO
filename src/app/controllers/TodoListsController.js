


import CreateTodoList from '../services/TodoListsService';



class TodoListController {


    async store(req, res, next) {

        try {
            const UserID = (req.userId);
            const dataTodoList = {

                name: req.body.name,
                id: UserID,
            };




            const createTodoList = new CreateTodoList();

            const newTodoList = await createTodoList.Createtodolists(dataTodoList);

            const result = {
                name: newTodoList.name,

            }



            return res.json({ sucess: true, data: result });
        } catch (error) {


            next(error);
        }
    }
}
export default new TodoListController();