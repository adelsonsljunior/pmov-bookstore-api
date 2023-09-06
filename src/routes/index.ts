import express from "express";
import LabRoutes from "./LabRoutes";

const router = express.Router();

router.use("/lab", LabRoutes);

export default router;