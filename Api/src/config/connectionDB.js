// import "dotenv/config";
import { loadEnv } from "vite";
import { MongoClient } from "mongodb";

const env = loadEnv("development", process.cwd(), "VITE")
const DB = JSON.parse(env.VITE_ATLAS_CONNECTION)

export async function ConnectDb(){
  try {
    const URL = `mongodb+srv://${DB.user}:${DB.password}@cluster0.j4ctnar.mongodb.net/${DB.database}`
    const client = await MongoClient.connect(URL);
    return client.db();
  } catch (error) {
    return {status:500,message:error}
  }
}