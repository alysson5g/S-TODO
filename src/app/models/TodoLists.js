import Sequelize, { Model } from 'sequelize';

class todoLists extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
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
