module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('todoLists', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            user_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },



            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            enabled: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('todoLists');
    },
};
