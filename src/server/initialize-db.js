import { defaultState } from "./defaultState";
import { connectDB } from "./connect-db";

async function initializeDB() {
    let db = await connectDB()
    for (let collectionName in defaultState) {
        let collection = db.collection(collectionName)
        await collection.insertMany(defaultState[collectionName])
    }
}

/*
initializeDB().then(function () {
    console.log("Promise resolved");
}).catch(function (e) {
    console.log("Promise rejected. Reason: " + e);
}).finally(() => {
    console.log("Promise on final block");
})
 */