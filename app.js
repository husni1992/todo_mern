const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todo = require('./routes/todo.routes');

const app = express();

// Set up mongoose connection
const test_db_url = 'mongodb://todo_mern:abcdxyz123@ds113906.mlab.com:13906/todo_12122018';
const dbUrl = process.env.MONGODB_URI || test_db_url;
mongoose.connect(
    dbUrl,
    { useNewUrlParser: true },
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/todos', todo);

let port = 9000;

app.listen(port, () => {
    console.log(`Server is up and running on port number ${port}`);
});
// edited by metho
function myFun() {}

// Added by Husni
function getDetails(param1) {
    return param1;
}
