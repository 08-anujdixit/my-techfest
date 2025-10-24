import express from 'express';
import {verifyEmail} from '../controllers/emailVerification.js';

const router = express.Router();

router.post('/verify',verifyEmail);

export default router;