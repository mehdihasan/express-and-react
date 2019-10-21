import {MongoClient} from "mongodb";
const url = process.env.MONGODB_URI || `mongodb://172.18.0.1:27017/organizer`; // TODO: define a IP in the docker-compose file to access the container from webapp
let db = null;

export async function connectDB(){
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    return db;
}

// connectDB()