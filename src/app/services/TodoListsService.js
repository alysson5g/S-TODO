import todolist from '../models/todoLists';

class CreatetodoLists {
    async createtodolists(data) {
        console.log('enter create todoLists');
        try {
            const result = {
                name: data.name,

            };

            const newUser = await todolist.create(result);
            return newUser;
        } catch (error) {
            console.log('error create todoLists');
            return error.message;
        }
    }
}

export default CreatetodoLists;
