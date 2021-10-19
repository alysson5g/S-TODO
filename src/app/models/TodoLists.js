import Sequelize, { Model } from 'sequelize';

class todoLists extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                enabled: Sequelize.BOOLEAN,

            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.users, { foreignKey: 'user_id' });

    }
}

export default todoLists;