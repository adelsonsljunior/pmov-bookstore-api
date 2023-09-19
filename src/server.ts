import express from "express";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(cors())

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("origin", "*");
    app.use(cors(options));
    next();
  });

app.use(routes);

app.listen(3333, () => {
    console.log("Server running localhost:3333");
});




