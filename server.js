var path = require('path')

var express = require('express')
var hbs = require('express-handlebars')

var routes = require('./routes')

var app = express()//here we have Express ready to use as var app.
module.exports = app

// Middleware is any number of functions that are invoked by the Express.js routing layer before your final request handler is, and thus sits in the middle between a raw request and the final intended route


app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

var hbs = require('express-handlebars')


// Routes refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched
app.get('/', routes.home)
app.get('/details/:id/author', routes.author)
app.get('/details/:name', routes.details)

// app.get('/author/:id', routes.author)
