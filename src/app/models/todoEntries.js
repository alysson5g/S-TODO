import Sequelize, { Model } from 'sequelize';

class todoEntries extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                description: Sequelize.STRING,
                due_date: Sequelize.DATE,
                completed: Sequelize.BOOLEAN,
                enabled: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.todoLists, { foreignKey: 'todolists_id' });

    }
}

export default todoEntries;