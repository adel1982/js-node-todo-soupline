const mongoose = require('mongoose')
const Schema	 = mongoose.Schema;

const todoSchema = new Schema({
	title: {
		type: String, // L'élément enregistré en BDD devra forcément être une chaine de caractère
		required: true
	}
});

module.exports = mongoose.model('todos', todoSchema);