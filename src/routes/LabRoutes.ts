import express from "express";

import { hello, params, body} from "../controllers/LabController";

const router = express.Router();

router.get("/hello", hello);

router.get("/params/:nome", params)

router.post("/body", body)

export default router;


