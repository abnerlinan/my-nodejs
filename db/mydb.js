var Db = require('mongodb').Db
, Server = require('mongodb').Server
, Connection = require('mongodb').Connection
, format = require('util').format;

var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : Connection.DEFAULT_PORT;


module.exports = new Db('node-mongo-examples', new Server(host, port),{safe:false});
console.log("Connecting to " + host + ":" + port);
/*
module.exports = new Db.connect(
  format("mongodb://%s:%s/node-mongo-examples?w=1", host, port), function(err, db){
  
  Db.connect(format("mongodb://%s:%s/node-mongo-examples?w=1",host,port),function(err,db){
      db.dropDatebase(callback);
      var collection = db.collection('test',callback(err,collection));
      collection.remove(callback(err,result));
      collection.insert(params,{w:1},callback(docs));
      collection.count(callback(err,count));
      collection.find().each(callback(err,doc));
      collection.find().toArray(callback(err,docs));
      collection.find({'a':1}).nextObject(callback(err,doc));
      collection.find({}, {'skip':1, 'limit':1, 'sort':'a'}).toArray(function(err, docs));
      // Find all records with 'a' > 1, you can also use $lt, $gte or $lte
      collection.find({'a':{'$gt':1}}).toArray(function(err, docs));
      collection.find({'a':{'$gt':1, '$lte':3}}).toArray(function(err, docs));
      // Find all records with 'a' in a set of values
      collection.find({'a':{'$in':[1,2]}}).toArray(function(err, docs));
      collection.find({'a':/[1|2]/}).toArray(function(err, docs));
      collection.createIndex('a',function(err,indexName){
        collection.hint = 'a';
      });
      db.close();
      // Use a hint with a query, hint's can also be store in the collection
      // and will be applied to each query done through the collection.
      // Hint's can also be specified by query which will override the 
      // hint's associated with the collection
      // You will see a different explanation now that the hint was set
      // collection.find({'a':/[1|2]/}).explain(function(err, doc) {
      //})
      //
      //collection.find({'a':/[1|2]/}, {'hint':'a'}).explain(function(err, doc) {
      //})
    });
  
});*/