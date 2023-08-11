import express, { Request, Response } from 'express';
import 'dotenv/config';
import { connectDB } from './db/connect';
import { router as productsRouter } from './routes/products';
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

app.use('/api/v1/products', productsRouter);

//products route
app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const connectString = process.env.MONGO_URL;

const start = async () => {
  try {
    //connectDB
    await connectDB(connectString || '');
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
