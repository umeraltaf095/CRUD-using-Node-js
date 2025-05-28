import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const secret = process.env.SECRET_KEY;

const authenticToken = (req, res, next) => {
  const jwtToken = req.headers["authorization"];

  if (!jwtToken) {
    res.json({ message: "Token not found" });
  }
  const onlyToken = jwtToken.split(" ")[1];
  if (!onlyToken) {
    onlyToken = jwtToken;
  }
  try {
    const aunthicate = jwt.verify(onlyToken, secret);
    if (aunthicate) {
      next();
    }
  } catch (err) {
    res.json({
      message: "Given token is not the same token",
      error: err.message,
    });
  }
};

export default authenticToken;
