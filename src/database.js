//lets require/import the mongodb native drivers.
const { MongoClient } = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
// var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
const uri = 'mongodb+srv://kma_attacker:Nguyetdien@123@cluster0-nuac9.azure.mongodb.net/attacker?retryWrites=true&w=majority';

// const dbName = 'acttackesr';

MongoClient.connect(uri, function(err, client) {
  if(err) {
       console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected...');
  const collection = client.db("attacker").collection("devices");
  // perform actions on the collection object
  client.close();
});

// module.exports