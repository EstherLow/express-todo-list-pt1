const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true},
  description: { type: String },
  completed: { type: Boolean }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
