import express, { Request, Response } from 'express';
const app = express();
import { router } from './routes/tasks';
import { connectDB } from './db/connect';
import { notFound } from './middleware/not-found';

const port: number = 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', router);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () => console.log(`server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
