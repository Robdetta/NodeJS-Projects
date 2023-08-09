import { Schema, model, Document } from 'mongoose';
import 'dotenv/config';

//create an interface representing a document in MongoDB
interface ITask extends Document {
  name: string;
  completed: boolean;
}
//create a schema corresponding to the document interface
const TaskSchema = new Schema<ITask>({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
//create a model
const TaskDB = model<ITask>('Task', TaskSchema);

export { TaskDB };
