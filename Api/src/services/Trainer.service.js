import { ConnectDb } from "../config/connectionDB";

export const GetAllReports = async () => {
  let db = await ConnectDb();
  let collection = db.collection("incident");
  let data = await collection.find({}).toArray();
  return data;
};

export const GetReportsbySite = async (SITE) => {
  let db = await ConnectDb();
  let collection = db.collection("incident");
  let data = await collection.find({ Site: SITE }).toArray();
  return data;
};

export const GetReportByCamper = async (Camper) => {
    let db = await ConnectDb();
    let collection = db.collection("incident");
    let data = await collection.find({"Camper.Username":Camper}).toArray();
    return data; 
};

export const GetReportByDateOfIncident= async (DATE) => {
    let db = await ConnectDb();
    let collection = db.collection("incident");
    let data = await collection.find({ DateOfIncident: DATE }).toArray();
    return data; 
};