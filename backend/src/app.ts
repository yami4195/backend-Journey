import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from "morgan";

const app = express();

  //middlewares
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());

    //Routes will go here later
    app.get("/", (_req, res)=>{
        res.json({message:"Api is running"});
    });


    



export default app;
