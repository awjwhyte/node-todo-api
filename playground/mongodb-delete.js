// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MOngoDB server');
  }
  console.log('Connected to MOngoDB server');
  const db = client.db('TodoApp');

  // Delete Many

  // db.collection('Users').deleteMany({location:"Halifax"}).then((result) => {
  //   console.log(result);
  // })

// Delete One
  // db.collection('Todos').deleteOne({text: "pick up kids"}).then((result) => {
  //   console.log(result);
  // })

// find one and delete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c537313c835514f7dc65380')}).then((result) => {
    console.log(JSON.stringify(result, undefined 2));
  })

  // client.close();
});
