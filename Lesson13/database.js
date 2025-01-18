require("dotenv").config();

const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;
console.log("URL:", url);

const client = new MongoClient(url);
const dbName = "MyUsers";

async function main() {
  await client.connect();
  console.log("Connected to the server successfully");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const deleteResult = await collection.deleteMany({ firstName: "Thivya" });
  console.log("Deleted documents =>", deleteResult);

  const updateResult = await collection.updateOne(
    { location: "SRM" },
    { $set: { lastName: "Periyakaruppan" } }
  );
  console.log("Updated documents =>", updateResult);

  //READ
  const documents = await collection.find({}).toArray();
  console.log("All documents:", documents);

  //   const insertResult = await collection.insertMany([
  //     { firstName: "Alagusurya", lastName: "P", location: "chennai" },
  //     { firstName: "Alagappan", lastName: "P", location: "karaikudi" },
  //     { firstName: "Thivya", lastName: "P", location: "Austria" },
  //   ]);
  //   console.log("Inserted documents =>", insertResult);

  return "done";
}

main().then(console.log).catch(console.error).finally(client.close());
