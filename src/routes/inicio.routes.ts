import { Router } from "express";
const router = Router();

import {txt} from '../controllers/inicio.controller'
router.get('/',txt)

export default router