import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import multer from "multer";

const secret = process.env.SECRET_KEY;

export const authenticToken = (req, res, next) => {
  const jwtToken = req.headers["authorization"];

  if (!jwtToken) {
    res.json({ message: "Token not found" });
  }

  try {
    const aunthicate = jwt.verify(jwtToken, secret);
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

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + path.extname(file.originalname);
    console.log(fileName);
    
    cb(null, fileName);
  },
});

export const upload = multer({ storage: storage });

