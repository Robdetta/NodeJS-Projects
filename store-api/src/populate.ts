import 'dotenv/config';
import { connectDB } from './db/connect';
import { productsDB } from './models/products';
import jsonProducts from './products.json';

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL || '');
    await productsDB.deleteMany();
    await productsDB.create(jsonProducts);
    process.exit(0);
    console.log('success');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
