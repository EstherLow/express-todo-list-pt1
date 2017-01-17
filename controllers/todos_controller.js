const Todo = require('../models/todo')
const express = require('express')
const router = express.Router();


// TODO. import express and create a Router, replace the methods below with routes e.g.
// router.post('/', function(req,res) => {
//  Todo.create(req.body, function (err, todo) {
//    res.json(todo)
//  }
// })


router.post('/add_new', function(req, res) {
  console.log(req.body)
  Todo.create(req.body, function (err, todo) {
    if (err) {
      console.log(err)
      return
    }
    res.render('new', {todo: todo})
  })
})


router.get('/', function(req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      console.log(err)
      return
    }
    //res.json(todos)
    res.render('overview', { todos: todos })
    // res.json(todos)
  })
})

router.get('/update', function(req,res){
  res.render('update')
})

router.get('/add_new', function(req, res) {
  res.render('add_new')
})

router.get('/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) return console.log(err)
    //res.json(todo)
    res.render("update", {todo: todo})
  })
})

router.put('/:id', function (req, res) {
  Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, todo) {
    if (err) console.log(err)
    res.render('new', {todo: todo})
  })
})

router.delete('/:id', function(req, res) {
  console.log(req.params.id);
   Todo.findByIdAndRemove(req.params.id, function (err, todo) {
     if (err) return console.log(err)
     console.log('User deleted!')
     res.status(301).redirect('/todos');
   })


})

module.exports = router
