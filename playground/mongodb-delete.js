// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) =>{
  //   console.log(res);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) =>{
  //   console.log(res);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) =>{
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name: 'Russell'}).then((res) =>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b3bac4a128cc402ffd7a291')}).then((res) =>{
    console.log(JSON.stringify(res, undefined, 2));
  });

  db.close();
});
