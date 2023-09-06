import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log("Server running localhost:3333");
});




