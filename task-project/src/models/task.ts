import mongoose, { Schema, model } from 'mongoose';

interface ITask {
  name: string;
  completed: boolean;
}

const TaskSchema = new mongoose.Schema<ITask>({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const TaskDB = model<ITask>('Task', TaskSchema);
