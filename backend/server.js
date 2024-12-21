import { config as configDotenv } from "dotenv";
import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';

configDotenv();
const app = express();
const PORT = process.env.PORT || 5000;

//connecting DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {console.log(`Server running on ${PORT}`)})
        
    })
    .catch((error) => {
        console.log(error);
    })