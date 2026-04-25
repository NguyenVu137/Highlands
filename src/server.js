import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from './config/connectDB';
require("dotenv").config();
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//init web routes
initWebRoutes(app);

//connect DB
connectDB();

app.listen(PORT, () => {
    console.log("JWT is running on port " + PORT);
})