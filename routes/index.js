const express = require('express');
const router 	= express.Router();

const Todo 		=	require('../models/Todo');

// Récupération des données 
router.get('/', (req, res) => { // On a une requête de type GET à la racine
	Todo.find({}).then((todos) => { // On ce sert du modèle Todo et on récupère tout les documents de la collection
		res.render('index', { // On passe le tableau todos dans la vue 
			todos: todos
		});
	});
});

// Récupération de la valeur de l'input
router.post('/add', (req, res) => {
	const newTodo = new Todo({
		title: req.body.title // Attribut name de l'input
	})
	newTodo.save().then(() => {
		res.redirect('/'); // Redirige la page vers la racine
	});
});

// Delete d'une valeur 
router.delete('/delete/:id', (req,res) => {
	Todo.findOneAndDelete(req.params.id, () => { // Fonction callback autre qu'avec le .then
		res.redirect('/');
	})
})

// Edition d'une valeur
router.get('/update/:id', (req, res) => {
	Todo.findById(req.params.id, (err, todo) => {
		console.log(todo);
		res.render('update', {
			todo: todo
		});
	})
})

router.put('/update/:id', (req,res) => {
	Todo.findByIdAndUpdate(req.params.id, {title: req.body.title}, (err) => {
		if(err) {
			console.log(err);
		}
		res.redirect('/');
	})
})

module.exports = router;