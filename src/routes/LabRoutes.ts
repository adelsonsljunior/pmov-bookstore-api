import express from "express";

import LabController from "../controllers/LabController";

const labController = new LabController();

const router = express.Router();

router.get("/hello", labController.hello);

router.get("/params/:nome", labController.paramns);

router.post("/body", labController.body);

router.post("/users", labController.createUser);

router.get("/users", labController.findAllUsers);

router.post("/password/encrypt", labController.paswordHash);

router.post("/password/compare", labController.passworsCompare);

export default router;


