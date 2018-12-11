const Todo = require('../models/Todo');

const getIndex = (req, res) => {
	Todo.find({}, (err, todos) => {
		if(err) console.log(err);
		console.log(todos);
		res.render('index', {
			todos: todos
		});
	});
}

const postIndex = (req, res) => {
	const newTodo = new Todo({
		title: req.body.title // On récupère le contenu du champ
	});
	newTodo.save((err) => {
		if(err) console.log(err);
		res.redirect('/');
	});
}

module.exports = {
	getIndex: getIndex,
	postIndex: postIndex
}