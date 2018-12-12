const express 				= require('express');
const mongoose 				= require('mongoose');
const bodyParser 			= require('body-parser');
const methodOverride 	= require('method-override')


// Connect to Database
mongoose.connect('mongodb://admin:ePcTwRq6yVZ7@ds161518.mlab.com:61518/js-node-todo-soupline',{ useNewUrlParser: true } ).then(() => {
	console.log('Connecté à la base de donnée');
})

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.set('view engine', 'pug');

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));