import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundRoute from './app/middleware/notFoundRoute';

const app: Application = express();
//parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1', router);
app.get('/', (_req: Request, res: Response) => {
  res.send('courier server is running');
});
// global error handler 
app.use(globalErrorHandler);
// not found route 
app.use(notFoundRoute)

export default app;
