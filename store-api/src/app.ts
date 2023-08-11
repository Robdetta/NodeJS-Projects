import express, { Request, Response } from 'express';
import 'dotenv/config';

//async error
import { notFound as notFoundMiddleWare } from './middleware/not-found';
import { errorHandlerMiddleWare as errorMiddleWare } from './middleware/error-handler';
const app = express();

//middleware
app.use(express.json());

//route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>');
});

//products route
app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDB
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
