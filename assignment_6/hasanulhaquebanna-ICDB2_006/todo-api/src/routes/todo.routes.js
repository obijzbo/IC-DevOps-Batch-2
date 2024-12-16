const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create todo
router.post('/', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update todo
router.patch('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (req.body.title) todo.title = req.body.title;
    if (req.body.description) todo.description = req.body.description;
    if (req.body.completed !== undefined) todo.completed = req.body.completed;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete todo
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;