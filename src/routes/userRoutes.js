import express from "express";
import userData from "../controller/userController.js";
import userModel from "../model/userModel.js";
import { authenticToken,
     upload } from "../middlewares/userMiddleware.js";
const router = express.Router();

router.post("/addUser", authenticToken, upload.single('file'), userData.addUser);
router.get("/getUser", authenticToken, userData.getUser);
router.delete("/deleteUser/:id", authenticToken, userData.deleteUser);
router.put("/updateUser/:id", authenticToken, userData.editUser);

export default router;
