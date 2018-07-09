// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b42fe5135f00b8fd9ad751d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((res) =>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b3ba947f92a3802d6a67e7d')
  }, {
    $set: {
      name: 'Russell'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) =>{
    console.log(res);
  });

  db.close();
});
