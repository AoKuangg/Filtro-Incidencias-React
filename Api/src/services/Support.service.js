import { ConnectDb } from "../config/connectionDB.js";

let db = await ConnectDb();
let collection = db.collection("incident");

export const GetReportsBySupport = async(Support)=>{
    let data = await collection.find({"Support.Username":Support}).toArray();
    return data;
};

export const ModifyReports = async(update)=>{
    const Fil = {
        Tittle: update.Tittle,
      };
      const updata = {
        $set:{
          Support:{
            Username: update.Support.Username,
            Diagnosis: update.Support.Diagnosis,
            Status: update.Support.Status,
          },
        }
      };
      let data = await collection.updateOne(Fil, updata);
      return data;
};
