import express from 'express';
import {getsearch} from '../controllers/controller.js';

//express Router
const router = express.Router();



//route to search ads
router.get('/search/:key',getsearch);

export default router;