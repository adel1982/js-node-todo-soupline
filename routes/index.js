const express = require('express');
const router 	= express.Router();

const Todo 		=	require('../models/Todo');

router.get('/', (req, res) => {
	Todo.find({}).then((todos) => {
		res.render('index', {
			todos: todos
		});
	});
});

router.post('/add', (req, res) => {
	const newTodo = new Todo({
		title: req.body.title
	})
	newTodo.save().then(() => {
		res.redirect('/'); // Redirige la page vers la racine
	});
});

module.exports = router;