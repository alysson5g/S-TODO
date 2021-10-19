


import CreateTodoEntries from '../services/TodoEntriesService';



class TodoEntriesController {


    async store(req, res, next) {

        try {

            const dataTodoEntries = {

                title: req.body.title,
                todolists_id: req.body.todolists_id,
                description: req.body.description,
                due_date: req.body.due_date,
                completed: false,
                enabled: true,
            };




            const createTodoEntries = new CreateTodoEntries();

            const newTodoEntries = await createTodoEntries.Createtodoentries(dataTodoEntries);

            const result = {
                Title: newTodoEntries.title,

            }



            return res.json({ sucess: true, data: result });
        } catch (error) {


            next(error);
        }
    }
}
export default new TodoEntriesController();