import express from 'express';
import loginForm from '../controller/loginController.js';

const router = express.Router();


router.post('/admin', loginForm);

export default router ;