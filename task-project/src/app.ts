import express from 'express';
const app = express();
import { router } from './routes/tasks';
import { connectDB } from './db/connect';
import { notFound } from './middleware/not-found';
import { errorHandlerMiddleware } from './middleware/error-handler';

const port: number | undefined = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', router);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () => console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
