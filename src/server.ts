import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());


app.listen(process.env.PORT || 3333, () => {
    console.log("Server running localhost:3333");
});




