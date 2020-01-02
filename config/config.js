
module.exports = {
    username: 'your_username',
    password: 'your_password',
    database: 'local_db',
    host: 'localhost',
    port: 5432,

    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    define: {
        // Define global model defaults
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        paranoid:false,
        createdAt: 'created',
        updatedAt: 'updated',
        deletedAt: 'archived'
    }

};
