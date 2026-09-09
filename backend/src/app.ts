import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from "morgan";
import errorHandler from './middlewares/error.middleware';

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

    app.get("/api/health",  (req, res)=>{
      res.status(200).json({
        message:"Api health is good and running on port 5000",
      });
    })

    app.use(errorHandler);

    



export default app;
