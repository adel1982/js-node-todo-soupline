const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
	title: {
		type: String, // L'élément enregistré en BDD devra forcément être une chaine de caractère
		required: true
	}
});

// todos -> Mongoose va automatiquement ajouté un "s" à la collection
module.exports = mongoose.model('todo', todoSchema);