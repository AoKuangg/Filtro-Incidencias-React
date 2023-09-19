import { ConnectDb } from "../config/connectionDB.js";

const db = await ConnectDb();
const collection = db.collection("incident");

export const CreateIncident = async(incident) => {
  let data = await collection.insertOne(incident);
  return data
}