import express from "express";

import LabController from "../controllers/LabController";

const labController = new LabController();

const router = express.Router();

router.get("/hello", labController.hello);

router.get("/params/:nome", labController.paramns);

router.post("/body", labController.body);

export default router;


