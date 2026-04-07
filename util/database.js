const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db ;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://yash-node-user:QO1a0gPOvMPCGGeO@cluster0.mrtvws2.mongodb.net/?appName=Cluster0",
  )
    .then((client) => {
      console.log(`Connected successfully !! `);
      _db = client.db('/shop')
      callback();
    })
    .catch((err) => {console.log(err)
      throw err
    });
};

const getDb = ()=>{
  if(_db){
    return _db;
  }
  throw "No dbs found"
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;