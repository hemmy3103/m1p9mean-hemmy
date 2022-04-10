const { MongoClient } = require('mongodb');

const connectionString = "mongodb://localhost:27017";
// const connectionString = "mongodb+srv://hemmy:u7TyviifbwMhPxVL@cluster0.fu5vl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

function getDb(){
    return MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('e-kaly')
        return db;
    })
}

module.exports = {getDb}