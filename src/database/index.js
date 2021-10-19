import Sequelize from 'sequelize';
import todoEntries from '../app/models/todoEntries';
import todoLists from '../app/models/todoLists';
import Users from '../app/models/Users';

import databaseConfig from '../config/database';

const models = [Users, todoEntries, todoLists];


class Database {

    constructor() {

        this.init();
    }

    async init() {

        this.connection = new Sequelize(databaseConfig);

        models
            .map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models)
            );
        try {
            await this.connection.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.log('Unable to connect to the database:', error);
        }
    }
}

export default new Database();
