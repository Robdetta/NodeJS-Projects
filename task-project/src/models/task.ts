import mongoose, { model } from 'mongoose';
import 'dotenv/config';

interface ITask {
  name: string;
  completed: boolean;
}

const TaskSchema = new mongoose.Schema<ITask>({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const TaskDB = model<ITask>('Task', TaskSchema);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log('Connected to the DB'))
  .catch((err) => console.log(err));

export { mongoose };
