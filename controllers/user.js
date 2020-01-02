var models = require('../models/');
module.exports = {
    POST: function(req, res, inflection) {
        return models.User
            .create()
            .then( (userRes) => {
                return userRes
            })
            .then( (resData) => {
                res.json({status: 200, response:resData});
            })
            .catch( (error) => {
                res.json({status: 500, error: error.message});
            });

    },
    GET: function(req, res, inflection) {
        return models.User
            .findAll()
            .then( (userRes) => {
                return userRes
            })
            .then( (resData) => {
                res.json({status: 200, response:resData});
            })
            .catch( (error) => {
                res.json({status: 500, error: error.message});
            });

    },
    PUT: function(req, res, inflection) {
        return models.User
            .update(body, {
		where:{
			id:body.id
		}
            })
            .then( (userRes) => {
                return userRes
            })
            .then( (resData) => {
                res.json({status: 200, response:resData});
            })
            .catch( (error) => {
                res.json({status: 500, error: error.message});
            });

    },
    DELETE: function(req, res, inflection) {
        return models.User
            .destroy({
		where:{
			id:body.id
		}
            })
            .then( (userRes) => {
                return userRes
            })
            .then( (resData) => {
                res.json({status: 200, response:resData});
            })
            .catch( (error) => {
                res.json({status: 500, error: error.message});
            });

    }


}