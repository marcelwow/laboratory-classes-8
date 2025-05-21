const { DB_USER, DB_PASS } = require("./config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
    MongoClient.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.86jxk9y.mongodb.net/shop?retryWrites=true&w=majority`)
        .then((client) => {
            console.log("Connected to MongoDB!");
            database = client.db("shop");
            callback();
        })
        .catch((error) => {
            console.error("Failed to connect to MongoDB:", error);
            process.exit(1);
        });
};

const getDatabase = () => {
    if (!database) {
        throw new Error("Database not initialized!");
    }
    return database;
};

module.exports = { mongoConnect, getDatabase };
