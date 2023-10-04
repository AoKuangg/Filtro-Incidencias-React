import * as SupportService from "../services/Support.service.js";

export const GetReportsBySupport = async (req, res) => {
  try {
    let data = await SupportService.GetReportsBySupport(req.params.Support);
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error getting the reports",
      error: error.message,
    });
  }
};

export const ModifyReports = async (req, res) => {
  try {
    let data = await SupportService.ModifyReports({
      Tittle: req.params.Tittle,
      Support: {
        Diagnosis: req.body.Support.Diagnosis,
      },
      Status: req.body.Status,
    });
    res.status(200).json({ status: 200, message: "Success", data:data });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error modifying the report",
      error: error.message,
    });
  }
};
