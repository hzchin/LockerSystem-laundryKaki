
var express = require('express')
var app = express();
var routes = require('./route');
var bodyParser = require('body-parser');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Import Mongoose
let mongoose = require('mongoose');

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/lockerSystem', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api/v1', routes);

const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
  });



