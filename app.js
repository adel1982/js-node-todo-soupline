const express 		= require('express');
const mongoose 		= require('mongoose');
const bodyParser 	= require('body-parser');
const app 				= express();

// Database
mongoose.connect('mongodb://localhost/todoapp',{useNewUrlParser: true}).then(() => {
	console.log('Connecté à la base de données');
}); 

// Template engine
app.set('view engine', 'pug');

// Body Parser
app.use(bodyParser.urlencoded({
	extended: false
}));

// Routes
const index = require('./routes/index');
app.use('/', index);

const port = 4000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));