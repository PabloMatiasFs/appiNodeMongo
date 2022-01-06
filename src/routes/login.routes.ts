import { Router } from "express";
const router = Router();

import { TokenValidation } from "./valid.token";
import {singUp, Singin, getUser} from '../controllers/login.controller'

router.get('/singin', Singin);
router.post('/singup', singUp);
router.get('/userlogin',TokenValidation, getUser)

export default router