import express, { Application } from "express";
import cors from "cors";

const app : Application = express()
//parser 
app.use(express.json());
app.use(cors());

// application route 



export default app;