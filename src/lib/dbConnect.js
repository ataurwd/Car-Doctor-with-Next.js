import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `${process.env.MONGODB_URL}`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbConnect = (collections) => {
  return client.db("doctor-pro").collection(collections);
};

export default dbConnect;
