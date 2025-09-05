import express from 'express';
import {login,signup} from '../controllers/authController.js';
import {verifyEmail} from '../controllers/emailVerification.js';

// import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login',login);
router.post('/signup',signup);
router.post('/verify',verifyEmail);

export default router;