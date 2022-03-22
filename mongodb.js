const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1"
database = "crud-operation"
const client = new MongoClient(url);

async function mongoConnect(){
    const result = await client.connect();
    db = result.db(database);
    return db.collection("users");
}

module.exports = mongoConnect;