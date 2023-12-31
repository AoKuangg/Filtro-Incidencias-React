import * as TrainerService from "../services/Trainer.service.js";

export const GetAllReports = async (req, res) => {
  try {
    let data = await TrainerService.GetAllReports();
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        message: "Error getting all reports",
        error: error.message,
      });
  }
};

export const GetReportsbySite = async (req, res) => {
  try {
    let data = await TrainerService.GetReportsbySite(req.params.Site);
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        message: "Error getting the reports",
        error: error.message,
      });
  }
};

export const GetReportByCamper = async (req, res) => {
  try {
    let data = await TrainerService.GetReportByCamper(req.params.Camper);
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        message: "Error getting the report",
        error: error.message,
      });
  }
};

export const GetReportByDateOfIncident = async (req, res) => {
  try {
    let data = await TrainerService.GetReportByDateOfIncident(req.params.Date);
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        message: "Error getting the report",
        error: error.message,
      });
  }
};

export const GetReportBySeverity = async (req, res) => {
  try {
    let data = await TrainerService.GetReportBySeverity(req.params.Severity);
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        message: "Error getting the report",
        error: error.message,
      });
  }
};

export const GetReportByCategory = async (req, res) => {
  try {
    let data = await TrainerService.GetReportByCategory(req.params.Category);
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        message: "Error getting the report",
        error: error.message,
      });
  }
};

export const ModifyReport = async (req, res) => {
  try {
    let data = await TrainerService.ModifyReport({
      Tittle: req.params.Tittle,
      Severity: req.body.Severity,
      Category: req.body.Category,
      Support: {
        Username: req.body.Support.Username,
      },
    });
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        message: "Error modifying the report",
        error: error.message,
      });
  }
};
