const express = require('express');
const router 	= express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.getIndex);

router.post('/ajouter', indexController.postIndex);

module.exports = router;