import Todoentries from '../models/TodoEntries';

class CreatetodoEntries {
    async Createtodoentries(data) {
        console.log('enter create todoEntries');



        const result = {
            title: data.title,
            todolists_id: data.todolists_id,
            description: data.description,
            due_date: data.due_date,
            completed: data.completed,
            enabled: data.enabled,
        };


        const newtodoEntries = await Todoentries.create(result);
        return newtodoEntries;

    }
}

export default CreatetodoEntries;
