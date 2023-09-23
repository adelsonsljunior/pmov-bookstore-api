import express from "express";

import BookController from "../controllers/BookController";

const bookController = new BookController();

const router = express.Router();

router.get("/", bookController.findAll);
router.get("/:id", bookController.findById);

export default router;