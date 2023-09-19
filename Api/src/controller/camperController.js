import * as CamperQuery from "../services/camper.service.js";

export const CreateIncident = async (req,res)=>{
    try {
      let data = await CamperQuery.CreateIncident(req.body);
      res.status(200).json({status:200,message:"OK",data})
    } catch (error) {
      res.status(500).json({status:200,message:error.message})
    }
};