"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserNombre = exports.getUserAge = exports.getUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, typeorm_1.getRepository)(User_1.User).find();
    if (result)
        return res.json(result);
    else
        return res.status(404).json({ mgs: "No se encuentran usuarios registrardos." });
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = (0, typeorm_1.getRepository)(User_1.User).create(req.body);
        const result = yield (0, typeorm_1.getRepository)(User_1.User).save(newUser);
        return res.json(result);
    }
    catch (error) {
        return res.status(400).json({ msg: error });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, typeorm_1.getRepository)(User_1.User).findOne(req.params.id);
    if (user) {
        const updateUser = (0, typeorm_1.getRepository)(User_1.User).merge(user, req.body);
        const result = yield (0, typeorm_1.getRepository)(User_1.User).save(updateUser);
        return res.json(result);
    }
    else {
        return res.status(400).json({ msg: "No se encuentra el usuario." });
    }
});
exports.updateUser = updateUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, typeorm_1.getRepository)(User_1.User).findOne(req.params.id);
    if (result)
        return res.json(result);
    else
        return res.status(404).json({ mgs: "No se encuentra el usuario." });
});
exports.getUser = getUser;
const getUserAge = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let age = parseInt(req.params.number);
    const result = yield (0, typeorm_1.getRepository)(User_1.User).find({ age: age });
    if (result)
        return res.json(result);
    else
        return res.status(404).json({ mgs: "No se encuentra el usuario con esa edad." });
});
exports.getUserAge = getUserAge;
const getUserNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, typeorm_1.getRepository)(User_1.User).find({ firstName: req.params.string });
    if (result)
        return res.json(result);
    else
        return res.status(404).json({ mgs: "No se encuentra el usuario con ese nombre." });
});
exports.getUserNombre = getUserNombre;
