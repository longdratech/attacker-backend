//lets require/import the mongodb native drivers.
const { MongoClient } = require('mongodb');

module.exports = async function ConnectDB() {
  const uri = 'mongodb+srv://kma_attacker:Nguyetdien@123@cluster0-nuac9.azure.mongodb.net/attacker?retryWrites=true&w=majority';

  // const dbName = 'acttackesr';

  MongoClient.connect(uri, function (err, client) {
    if (err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
    }
    console.log('Connected...');
    const collection = client.db("attacker").collection("devices");
    // perform actions on the collection object
    client.close();
  });
}

