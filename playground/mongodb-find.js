// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MOngoDB server');
  }
  console.log('Connected to MOngoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c50ec5379a08c22aad58b91')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('\nUnable to fetch todos', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}` );
  // }, (err) => {
  //   console.log('\nUnable to fetch todos', err)
  // });

  db.collection('Users').find({name:'William'}).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('\nUnable to fetch Todos', err);
  });

  // client.close();
});
