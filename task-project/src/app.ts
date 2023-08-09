import express, { Request, Response } from 'express';
const app = express();
import { router } from './routes/tasks';

const port: number = 3000;

app.use(express.json());

//routes
app.get('/hello', (req: Request, res: Response) => {
  res.send('Something here');
});

app.use('/api/v1/tasks', router);

app.listen(port, () => console.log(`server is listening on ${port}...`));
