const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/todo.controller');

router.get('/all', TodoController.all);
router.get('/:id', TodoController.todoDetails);
router.post('/create', TodoController.create);
router.put('/update/:id', TodoController.todoUpdate);
router.delete('/:id', TodoController.todoDelete);

module.exports = router;