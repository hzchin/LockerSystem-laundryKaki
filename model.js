const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lockerSystem', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var locker = new mongoose.Schema({
    name: String
  });
