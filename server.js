var app = require('express')();
    express = require('express'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path'),
    mongodb = require('mongodb'),
    bodyParser = require('body-parser');

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/processmanager';

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
    var collectionProcess = db.collection('processes');
    var collectionFavorites = db.collection('favorites');

    //Create some users
    var process1 = {name: 'Process 1', command: './exec',hwid: 01 , role: ['user']};
    var process2 = {name: 'Process 2', command: './exec',hwid: 01 , role: ['user']};
    var process3 = {name: 'Process 3', command: './exec',hwid: 01 , role: ['user']};

    // Insert live processes
    collectionProcess.insert([process1, process2, process3], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
    });
    
    // Insert live processes
    collectionFavorites.insert([process1, process2, process3], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
    });
    
  }
});

http.listen(7777, function() {
  console.log('cool stuff on: 7777');
});