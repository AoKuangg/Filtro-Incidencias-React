import { ConnectDb } from "../config/connectionDB.js";

const db = await ConnectDb();
const collection = db.collection("incident");

export const GetAllReports = async () => {
  let data = await collection.find({}).toArray();
  return data;
};

export const GetReportsbySite = async (SITE) => {
  let data = await collection.find({ Site: SITE }).toArray();
  return data;
};

export const GetReportByCamper = async (Camper) => {
  let data = await collection.find({ "Camper.Username": Camper }).toArray();
  return data;
};

export const GetReportByDateOfIncident = async (DATE) => {
  let data = await collection.find({ DateOfIncident: DATE }).toArray();
  return data;
};

export const GetReportBySeverity = async (SEVERITY) => {
  let data = await collection.find({ Severity: SEVERITY }).toArray();
  return data;
};

export const GetReportByCategory = async (CATEGORY) => {
  let data = await collection.find({ Category: CATEGORY }).toArray();
  return data;
};

export const ModifyReport = async (modify) => {
  let data = await collection.updateOne({Tittle:modify.Tittle},{
    $set:{
      Severity: modify.Severity,
      Category: modify.Category,
      Support: {
        Username: modify.Support.Username,
      },
    }
  } );
  return data;
};
