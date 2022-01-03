import { Router } from "express";
const router = Router();

import {txt} from '../controllers/inicio.comtroller'
router.get('/',txt)