const mongoose = require('mongoose')
const todosController = require('./controllers/todos_controller')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

mongoose.connect('mongodb://localhost/todo-list')
mongoose.Promise = global.Promise

app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use("/todos", todosController)



// TODO. include express and body-parser, plugin in the todos controller and start listening


var server = app.listen(process.env.PORT || 3000)
console.log('Server UP')

module.exports = server
