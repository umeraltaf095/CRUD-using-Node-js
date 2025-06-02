import loginModel from "../model/loginModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;
const loginForm = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "Email or Password cannot be empty" });
    }
    const loginInfo = await loginModel.findOne({ email, password });
    if (!loginInfo) {
      return res.status(404).json({ message: "Wrong Email or Password" });
    }

    const token = jwt.sign({ email: loginInfo.email }, secretKey, {
      expiresIn: "1h",
    });
    return res.json({ message: "Admin logged in successfully", token: token });
  } catch (error) {
    res.status(500).json({ message: "Error occured", error: error.message });
  }
};
export default loginForm;
