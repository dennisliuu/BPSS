const MongoClient = require('mongodb').MongoClient;

// index.js 執行就建立連線
const url = 'mongodb://140.124.72.190:27017';
const dbName = 'test';
const client = new MongoClient(url, {useNewUrlParser: true});
client.connect()
  .then((connectedClient) => {
	  console.log('mongodb is connected');

	  const db = client.db(dbName);
	  const collection = db.collection('cats');

	  const mongoose = require('mongoose');

	  const Cat = mongoose.model('Cat', { name: String });

	  const kitty = new Cat({ name: 'Zildjian2' });

	  const result = collection.insertOne(kitty);

	  console.log(result);

  })
  .catch(error => {
    console.error(error);
  });

