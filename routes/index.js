const express = require('express');
const router 	= express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.getIndex);

router.post('/ajouter', indexController.postIndex);

router.delete('/supprimer/:id', indexController.deleteIndex);

module.exports = router;