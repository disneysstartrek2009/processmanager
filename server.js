var app = require('express')();
    express = require('express'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path'),
    mongodb = require('mongodb'),
    bodyParser = require('body-parser');

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/fightcoin';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

io.on('connection', function(socket){

  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
});

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('!!!!!!!!!!!!     Unable to connect to the mongoDB server. Error:     !!!!!!!!!!!!', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('  :)   Connection established to   :)  ', url);

    // Get the documents collection
    var collection = db.collection('users');

    //Create some users
    var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
    var user2 = {name: 'modulus user', age: 22, roles: ['user']};
    var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};

    // Insert some users
    collection.insert([user1, user2, user3], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
      //Close connection
      db.close();
    });
    
  }
});

http.listen(1337, function() {
  console.log('cool stuff on: 1337');
});