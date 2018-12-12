const Todo = require('../models/todo.model');

exports.all = (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            res.send('error');
        }
        res.send(todos);
    })
}

exports.todoDetails = (req, res, next) => {
    const id = req.params.id;
    Todo.findById(id, (err, obj) => {
        if (err) {
            return next(err);
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

exports.todoUpdate = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    Todo.findByIdAndUpdate(id, { $set: { name } }, { new: true }, (err, obj) => {
        if (err) {
            return next(err);
        }
        res.send('Todo updated.').status(200);
    })
}

exports.todoDelete = (req, res, next) => {
    debugger
    const id = req.params.id;
    Todo.findByIdAndDelete(id, (err, obj) => {
        if (err || !obj) {
            return next(err || 'Cannot find todo.');
        }
        res.send('Todo deleted.').status(200);
    })
}