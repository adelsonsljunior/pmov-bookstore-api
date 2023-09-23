import express from "express";

import BookController from "../controllers/BookController";

const bookController = new BookController();

const router = express.Router();

router.get("/", bookController.findAll);

export default router;