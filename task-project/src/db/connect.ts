import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

export const connectDB = (url: string) => {
  return mongoose.connect(url).then(() => console.log('Connected to the DB'));
};
