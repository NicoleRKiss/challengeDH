const express = require('express');
const app = express();

app.listen (3030, function() {
    console.log('Running on 3030');
})

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var detallePeliRouter = require('./routes/detallePeli');
var crudPeliculasRouter = require('./routes/crudPeliculas');
var editarPeliculasRouter = require('./routes/editarPeliculas');


app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/detallePeli', detallePeliRouter);
app.use('/crudPeliculas', crudPeliculasRouter);
app.use('/editarPeliculas', editarPeliculasRouter);


module.exports = app;