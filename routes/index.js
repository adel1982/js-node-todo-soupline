const express = require('express');
const router 	= express.Router();

const indexController = require('../controllers/index');
const editController = require('../controllers/edit');

router.get('/', indexController.getIndex);

router.post('/ajouter', indexController.postIndex);

router.delete('/supprimer/:id', indexController.deleteIndex);

router.get('/editer/:id', editController.getEdit);

router.put('/editer/:id', editController.putEdit);

module.exports = router;