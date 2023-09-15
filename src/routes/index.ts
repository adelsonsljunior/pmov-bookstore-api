import express from "express";
import LabRoutes from "./LabRoutes";
import UserRoutes from "./UserRoutes"

const router = express.Router();

router.use("/lab", LabRoutes);
router.use("/users", UserRoutes);

export default router;