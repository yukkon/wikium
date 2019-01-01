var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const sqlite3 = require('sqlite3').verbose();
const renderer = require('./renderer');

global.db = new sqlite3.Database('wikium.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

// loads module and registers app specific cleanup callback...
require('./cleanup').Cleanup(myCleanup);

function myCleanup() {
  db.close();
  console.log('App specific cleanup code...');
}

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var usersRouter = require('./routes/users');
var gamesRouter = require('./routes/games');
var apiRouter = require('./routes/api');

var app = express();

app.engine('tpl', renderer.render);
app.set('views', './views');
app.set('view engine', 'tpl');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));

app.use(session({
    store: new SQLiteStore,
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat',
    cookie: { maxAge: 86400000 }
}));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/games', gamesRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);

Array.prototype.groupBy = function(key) {
  return this.reduce((h, a) => Object.assign(h, { [a[key]]:( h[a[key]] || [] ).concat(a) }), {});
};

module.exports = app;
