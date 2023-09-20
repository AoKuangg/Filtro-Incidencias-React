import { ConnectDb } from "../config/connectionDB.js";

//Sign In
export const SignIn = async (info) => {
  let db = await ConnectDb();
  let collection = db.collection("users");
  let resultado = await collection
    .find({ Email: info.Email, Password: info.Password })
    .toArray();

  if (!resultado.length) return [];
  return [
    {
      _id: resultado[0]._id,
      username: resultado[0].username,
      email: resultado[0].email,
    },
  ];
};

//Sign UP

export const SignUp = async (info) => {
  let db = await ConnectDb();
  let collection = db.collection("users");

  let user = await collection.find({ Email: info.Email }).toArray();

  if (!user.length) {
    await collection.insertOne(info);
    return true;
  } else {
    return false;
  }
};
