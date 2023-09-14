import express from "express";

import UserController from "../controllers/UserController";

const userController = new UserController();

const router = express.Router();

router.post("/", userController.create);

export default router;