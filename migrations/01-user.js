'use strict';
module.exports = {
	
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('user',            {
                "id": {
                    "type": "INTEGER",
                    "allowNull": false,
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "name": {
                    "type": "VARCHAR(255)",
                    "allowNull": false
                },
                "fathers_name": {
                    "type": "VARCHAR(255)"
                },
                "age": {
                    "type": "INTEGER"
                },
                "address": {
                    "type": "VARCHAR(255)",
                },
                "contact": {
                    "type": "VARCHAR(255)"
                },
                "created": {
                    "type": "TIMESTAMP WITH TIME ZONE",
                    "allowNull": false
                },
                "updated": {
                    "type": "TIMESTAMP WITH TIME ZONE",
                    "allowNull": false
                }
            })

	},
	down: function(queryInterface, Sequelize) {
		 /*
		  Add altering commands here.
		  Return a promise to correctly handle asynchronicity.
		*/
	}
};