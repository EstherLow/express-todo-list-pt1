const Todo = require('../models/todo')
const express = require('express')
const router = express.Router();


// TODO. import express and create a Router, replace the methods below with routes e.g.
// router.post('/', function(req,res) => {
//  Todo.create(req.body, function (err, todo) {
//    res.json(todo)
//  }
// })


router.post('/', function(req, res) {
  console.log(req.body)
  Todo.create(req.body, function (err, todo) {
    if (err) {
      console.log(err)
      return
    }
    res.status(301).json(todo)
  })
})


router.get('/', function(req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      console.log(err)
      return
    }
    res.json(todos)
  })
})

router.get('/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err) return console.log(err)
    res.json(todo)
  })
})

router.put('/:id', function (req, res) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, todo) {
    if (err) console.log(err)
    res.json(todo)
  })
})

router.delete('/:id', function(req, res) {
   Todo.findByIdAndRemove(req.params.id, function (err, todo) {
     if (err) return console.log(err)
     console.log('User deleted!')
     res.status(200).json(todo);
   })

// router.delete('/:name', function(req, res) {
//    Todo.findOneAndRemove(req.params.name, function (err, todo) {
//      if (err) return console.log(err)
//      console.log('User deleted by name!')
//      res.status(200).json(todo);
//    })
// })

})

module.exports = router
