import express from "express";

import UserController from "../controllers/UserController";
import UserService from "../services/UserService";
import UserRepositoryPostgres from "../repositoreis/postgres/UserRepositoryPostgres";

const userRepository = new UserRepositoryPostgres();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = express.Router();

router.post("/", userController.create);

export default router;