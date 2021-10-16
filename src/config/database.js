module.exports = {
    dialect: 'mysql',
    // dialectOptions: 'mysql2',
    host: 'localhost',
    username: 'ubistart',
    password: '321',
    database: 'testeubi',
    port: '3306',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true,
    },
};
