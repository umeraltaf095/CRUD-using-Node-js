import express from 'express';
import loginForm from '../controller/loginController.js';

const router = express.Router();


router.post('/user', loginForm);

export default router ;