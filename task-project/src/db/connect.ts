import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = (url: string) => {
  return mongoose.connect(url).then(() => console.log('Connected to the DB'));
};

export { connectDB };
