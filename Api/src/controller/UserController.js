import * as userservices from "../services/Users.service.js";

export const GetAllSupports = async (req, res) => {
  try {
    let data = await userservices.GetAllSupports();
    res.status(200).json({ status: 200, message: "Success", data });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Error getting the supports",
      error: error.message,
    });
  }
};
