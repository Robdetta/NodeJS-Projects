import express, { Request, Response } from 'express';
const app = express();

const port: number = 3000;

app.get('/hello', (req: Request, res: Response) => {
  res.send('Something here');
});

app.listen(port, () => console.log(`server is listening on ${port}...`));
