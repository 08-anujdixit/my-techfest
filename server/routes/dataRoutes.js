import express from 'express';
import {sendRoles} from '../controllers/sendDataController.js';

const router = express.Router();

router.get('/fetchroles', sendRoles);

export default router;