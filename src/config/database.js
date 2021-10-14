module.exports = {
    dialect: 'mysql',
    dialectOptions: 'mysql2',
    host: 'localhost',
    username: 'mysql',
    password: 'root',
    database: 'root',
    port: '3606',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true,
    },
};
