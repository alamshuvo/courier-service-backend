import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';

const app: Application = express();
//parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1', router);
app.get('/', (_req: Request, res: Response) => {
  res.send('courier server is running');
});

export default app;
