import express,{Router} from 'express';
import {adduser,getUsers} from '../controller/user-controller.js'


const router = express.Router();


router.post('/add',adduser);
router.get('/all',getUsers);

export default router;