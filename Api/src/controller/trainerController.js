import * as TrainerService from "../services/Trainer.service.js";

export const GetAllReports = async (req, res) =>{
  try {
    let data = TrainerService.GetAllReports();
    res.status(200).json({status:200, message:"Success",data});
  } catch (error) {
    res.status(500).json({status:500, message:"Error getting all reports", error:error.message});
  }
};

export const GetReportsbySite = async (req, res) =>{
  try {
    let data = TrainerService.GetReportsbySite(req.params.Site);
    res.status(200).json({status:200, message:"Success",data});
  } catch (error) {
    res.status(500).json({status:500, message:"Error getting the reports", error:error.message});
  }
};

export const GetReportByCamper = async (req,res)=>{
  try {
    let data = TrainerService.GetReportByCamper(req.params.Camper);
    res.status(200).json({status:200, message:"Success",data});
  } catch (error) {
    res.status(500).json({status:500, message:"Error getting the report", error:error.message});
  }
};

export const GetReportByDateOfIncident = async (req,res)=>{
  try {
    let data = TrainerService.GetReportByDateOfIncident(req.params.Date);
    res.status(200).json({status:200,message:"Success",data});
  } catch (error) {
    res.status(500).json({status:500, message:"Error getting the report", error:error.message});
  }
};

export const GetReportBySeverity = async (req,res)=>{
  try {
    let data = TrainerService.GetReportBySeverity(req.params.Severity);
    res.status(200).json({status:200,message:"Success",data});
  } catch (error) {
    res.status(500).json({status:500, message:"Error getting the report", error:error.message});
  }
};