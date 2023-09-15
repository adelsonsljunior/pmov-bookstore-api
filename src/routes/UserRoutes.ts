import express from "express";

import UserController from "../controllers/UserController";

const userController = new UserController();

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", userController.findById);
router.put("/:id", userController.update)
router.delete("/:id", userController.delete)

export default router;