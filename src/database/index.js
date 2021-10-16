import Sequelize from 'sequelize';
import todoEntries from '../app/models/todoEntries';
import todoLists from '../app/models/todoLists';
import users from '../app/models/users';

import databaseConfig from '../config/database';

const models = [users, todoEntries, todoLists];


class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models)
            );

    }
}

export default new Database();
