const Todo = require('../models/todo.model');

exports.all = (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            res.send('error');
        }
        res.send(todos);
    })
}

exports.todoDetails = (req, res) => {
    const id = req.params.id;
    Todo.findById(12121212, (err, obj) => {
        if (err) {
            res.send('error')
        }
        res.send(obj)
    })
}

exports.create = (req, res) => {
    let _todo = new Todo(
        {
            name: req.body.name
        }
    );
    _todo.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Todo added successfully')
    })
}