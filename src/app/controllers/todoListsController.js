import CreatetodoLists from '../services/todoListsService';

class TodoListsController {
    async store(req, res) {
        try {
            const dataUser = {
                name: req.name,

            };

            const createUser = new CreateUsers();

            const newUser = await createUser.createusers(dataUser);

            return res.json(newUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
            throw error.message;
        }
    }
}
export default new TodoListsController();