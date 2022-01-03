import { Router } from "express";
const router = Router();

import {createUser, getUsers, getUser, updateUser, getUserAge, getUserNombre} from '../controllers/user.controller'

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.get('/userage/:number', getUserAge);
router.get('/username/:string', getUserNombre);
router.post('/user', createUser);
router.put('/useredit/:id', updateUser);
router.delete('/user/:id', );

export default router