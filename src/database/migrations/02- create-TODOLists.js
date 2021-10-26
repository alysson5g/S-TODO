module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('todoLists', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUID,
            },



            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
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
