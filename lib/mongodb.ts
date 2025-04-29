//connected to mongodb
import { MongoClient } from "mongodb";
const uri=process.env.MONGODB_URI!;
const options={};

let client;
let clientPromise: Promise<MongoClient>;
if(!process.env.MONGODB_URI){
    throw new Error("Please add you mongo uri");
}

// eslint-disable-next-line prefer-const
client=new MongoClient(uri,options);
// eslint-disable-next-line prefer-const
clientPromise=client.connect();
export default clientPromise;