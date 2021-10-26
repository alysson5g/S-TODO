module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('todoEntries', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUID,
            },


            todolists_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: { model: 'todoLists', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            user_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: { model: 'users', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },

            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: false,
            },
            due_date: {
                type: Sequelize.DATE,
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
            completed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,

            },
            completed_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            enabled: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('todoEntries');
    },
};
