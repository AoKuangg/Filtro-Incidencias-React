import { ConnectDb } from "../config/connectionDB";

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
  const Fil = {
    Tittle: modify.Tittle,
  };
  const updata = {
    $set:{
      Severity: modify.Severity,
      State: modify.State,
      Support:{
        Username: modify.Support.Username,
      },
    }
  };
  let data = await collection.updateOne(Fil, updata);
  return data;
};