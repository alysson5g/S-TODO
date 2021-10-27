


import ServicetodoEntries from '../services/TodoEntriesService';



class TodoEntriesController {


  async index(req, res, next) {

    try {
      console.log(req.userId)
      const findTodoEntries = new ServicetodoEntries();

      const newFindTodo = await findTodoEntries.findAdmTodo(req);


      return res.json({ sucess: true, data: newFindTodo });
    } catch (error) {


      next(error);
    }
  }

  async indexMyTodo(req, res, next) {

    try {
      console.log(req.userId)
      const findTodoEntries = new ServicetodoEntries();

      const newFindTodo = await findTodoEntries.findMyTodo(req);


      return res.json({ sucess: true, data: newFindTodo });
    } catch (error) {


      next(error);
    }
  }


  async store(req, res, next) {

    try {


      const dataTodoEntries = {

        title: req.body.title,
        todolists_id: req.body.todolists_id,
        user_id: req.userId,
        description: req.body.description,
        due_date: req.body.due_date,
        completed: false,
        enabled: true,
      };




      const createTodoEntries = new ServicetodoEntries();

      const newTodoEntries = await createTodoEntries.Createtodoentries(dataTodoEntries);





      return res.json({ sucess: true, data: newTodoEntries });
    } catch (error) {


      next(error);
    }
  }

  async completeTodo(req, res, next) {

    try {

      const completeTodoEntries = new ServicetodoEntries();



      const newCompleteTodoEntries = await completeTodoEntries.Completetodoentries(req.body);

      const result = {
        newCompleteTodoEntries

      }



      return res.json({ sucess: true, data: result });
    } catch (error) {


      next(error);
    }
  }


  async updateTodo(req, res, next) {

    try {

      const updateTodoEntries = new ServicetodoEntries();



      const newUpdateTodoEntries = await updateTodoEntries.Updatetodoentries(req.body);

      const result = {
        newUpdateTodoEntries
      }



      return res.json({ sucess: true, data: result });
    } catch (error) {


      next(error);
    }
  }

}
export default new TodoEntriesController();
