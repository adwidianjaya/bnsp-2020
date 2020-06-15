import Queue from "queue";
import { default as mongodb } from "mongodb";
let MongoClient = mongodb.MongoClient;
import { v4 as uuidV4 } from "uuid";

let q = Queue();

const USER_AND_PASS = "test:test123";
const DB_NAME = "testdb";

const MONGO_URL = `mongodb://${USER_AND_PASS}@localhost:27017/${DB_NAME}?authSource=admin`;

const start = async () => {
  console.log(`  Connecting to MongoDB [${MONGO_URL}]...`);

  const mongoClient = await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    // reconnectTries: 60,
    // reconnectInterval: 1000,
    // autoReconnect: true,
    poolSize: 4,
    // bufferMaxEntries: 0
    useUnifiedTopology: true,
  });
  const db = await mongoClient.db(DB_NAME);
  console.log(`> Connected to MongoDB [${MONGO_URL}]`);
  const collection = (collectionName) => db.collection(collectionName);

  const dataId = uuidV4();

  q.push(async (cb) => {
    try {
      console.log("\n1# task is running...");
      await collection("Data").remove({});
      await collection("Data").insertOne({
        _id: dataId,
        value: "satu",
      });
    } catch (err) {
      console.warn("Error:", err.message);
    }
    cb();
  });

  q.push(async (cb) => {
    try {
      console.log("\n2# task is running...");
      await collection("Data").updateOne(
        {
          _id: dataId,
        },
        {
          $set: {
            value: "one",
          },
        }
      );
    } catch (err) {
      console.warn("Error:", err.message);
    }
    cb();
  });

  q.push(async (cb) => {
    try {
      console.log("\n3# task is running...");
      let result = await collection("Data").findOne({
        _id: dataId,
      });
      console.log("One: ", { result });
    } catch (err) {
      console.warn("Error:", err.message);
    }
    cb();
  });

  q.push(async (cb) => {
    try {
      console.log("\n4# task is running...");
      await collection("Data").deleteOne({
        _id: dataId,
      });
    } catch (err) {
      console.warn("Error:", err.message);
    }
    cb();
  });

  q.push(async (cb) => {
    try {
      console.log("\n5# task is running...");
      let results = await collection("Data").find({}).toArray();
      console.log("Data: ", { results });
    } catch (err) {
      console.warn("Error:", err.message);
    }
    cb();
  });

  q.start(function (err) {
    if (err) throw err;
    console.log("All done!");
    process.exit();
  });
};

start();
