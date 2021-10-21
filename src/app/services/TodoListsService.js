import Todolist from '../models/TodoLists';

class ServicetodoLists {
    async Createtodolists(data) {
        console.log('enter create todoLists');



        const result = {
            name: data.name,
            user_id: data.id

        };

        const newtodoList = await Todolist.create(result);
        return newtodoList;

    }
}

export default ServicetodoLists;
