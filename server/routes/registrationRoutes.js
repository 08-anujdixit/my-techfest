import express from 'express';
import {register} from '../controllers/registrationController.js';
import {regLimiter} from '../middlewares/rateLimiter.js'

const router = express.Router();

router.post('/register',regLimiter,register);

export default router;