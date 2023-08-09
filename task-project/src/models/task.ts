import { Schema, model, Document } from 'mongoose';
import 'dotenv/config';

//create an interface representing a document in MongoDB
interface ITask extends Document {
  name: string;
  completed: boolean;
}
//create a schema corresponding to the document interface
const TaskSchema = new Schema<ITask>({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true },
});
//create a model
const TaskDB = model<ITask>('Task', TaskSchema);

export { TaskDB };
