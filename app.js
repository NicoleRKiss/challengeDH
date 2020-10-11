const express = require('express');
const app = express();
const session = require("express-session");
const cors = require('cors');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var movieRouter = require('./routes/movie');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.use(session({secret:'miapp'}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(3000, function (){
    console.log ('hola 3000');
})


app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/movie', movieRouter);


module.exports = app;