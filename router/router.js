var express = require('express');
var router = express.Router();
var inflection = require('inflection');
var endpointName = '';
var user = require('../controllers/user.js');
router.post('/api/user',user.POST);
router.get('/api/user',user.GET);
router.put('/api/user',user.POST);
router.delete('/api/user',user.GET);

module.exports = router;
