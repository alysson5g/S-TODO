


import CreateTodoList from '../services/TodoListsService';



class TodoListController {


  async store(req, res, next) {

    try {

      const dataTodoList = {

        name: req.body.name,

      };




      const createTodoList = new CreateTodoList();

      const newTodoList = await createTodoList.Createtodolists(dataTodoList);

      const result = {
        name: newTodoList.name,
        id: newTodoList.id

      }



      return res.json({ sucess: true, data: result });
    } catch (error) {


      next(error);
    }
  }
}
export default new TodoListController();
