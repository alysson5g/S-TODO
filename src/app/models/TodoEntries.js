import Sequelize, { Model } from 'sequelize';
import { isAfter } from 'date-fns';

class todoEntries extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                description: Sequelize.STRING,
                due_date: Sequelize.DATE,
                completed: Sequelize.BOOLEAN,
                enabled: Sequelize.BOOLEAN,
                completed_date: Sequelize.DATE,
                status: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        if (isAfter(new Date, this.due_date)) {
                            return 'In late';
                        }
                        return 'Within the time limit';
                    }
                }
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.todoLists, { foreignKey: 'todolists_id' });
        this.belongsTo(models.users, { foreignKey: 'user_id' });
    }
}

export default todoEntries;