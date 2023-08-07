import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/tasks';

const app = express();

const port = 3000;

app.use(express.json({ type: 'application/*+json' }));

app.use('/todos', todoRoutes);

// app.get('/', (req, res) => {
//   res.send('Task Project 2');
// });
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port);
