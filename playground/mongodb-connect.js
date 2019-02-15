// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MOngoDB server');
  }
  console.log('Connected to MOngoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: 'William',
    age: 28,
    location: 'Halifax'
  }, (err, result) => {
    if (err) {
      return console.log('Could not add user to the database');
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  client.close();
});
