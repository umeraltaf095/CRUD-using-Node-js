import express from 'express';
import userData from '../controller/userController.js';
const router = express.Router();



router.post('/addUser', userData.addUser);
router.get('/getUser', userData.getUser);
router.delete('/deleteUser/:id', userData.deleteUser);
router.put('/updateUser/:id', userData.editUser);

export default router;