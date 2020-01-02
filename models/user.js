'use strict'
module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define('User', {
        name:{
            type: DataTypes.STRING
        },
        fathers_name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        address: {
            type: DataTypes.DECIMAL
        },
        contact_no: {
            type: DataTypes.STRING
        }
                                           
    }, {
        tableName: 'user',
        name: {
            plural: 'users',
            singular: 'user'
        }       
    });

    return User;
};

