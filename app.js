const express = require("express");
const app 		= express();

// Template engine
app.set('view engine', 'pug');

// Routes
const index = require('./routes/index');
app.use('/', index);

const port = 4000;
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));