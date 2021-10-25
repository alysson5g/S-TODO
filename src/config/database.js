module.exports = {
    dialect: process.env.DBDIALECT,
    // dialectOptions: 'mysql2',
    host: process.env.HOST,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE,
    port: process.env.DBPORT,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true,
    },

};
