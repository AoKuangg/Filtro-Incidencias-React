import { ConnectDb } from "../config/connectionDB.js";

const db = await ConnectDb();
const collection = db.collection("users");

export const GetAllSupports = async () => {
  let data = await collection.find({Rol:"Support"}).toArray();
  return data;
};
