import express from "express";

import LabController from "../controllers/LabController";

const router = express.Router();

router.get("/hello", LabController.hello);

router.get("/params/:nome", LabController.paramns);

router.post("/body", LabController.body);

export default router;


