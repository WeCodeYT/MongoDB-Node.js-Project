const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'firstdatabase';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const dbo = client.db(dbName);
  
  dbo.collection("youtube-subscribers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });
 
  client.close();
});