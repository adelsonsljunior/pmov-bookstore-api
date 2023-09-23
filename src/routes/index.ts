import express from "express";
import LabRoutes from "./LabRoutes";
import UserRoutes from "./UserRoutes"
import BookRoutes from "./BookRoutes"

const router = express.Router();

router.use("/lab", LabRoutes);
router.use("/users", UserRoutes);
router.use("/books", BookRoutes);

export default router;