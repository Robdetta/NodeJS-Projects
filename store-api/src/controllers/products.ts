import { Request, Response } from 'express';
import { productsDB } from '../models/products';

const getAllProductsStatic = async (req: Request, res: Response) => {
  const products = await productsDB.find({});
  // throw new Error('testing async error');
  res.status(200).json({ products });
};

const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).json({ msg: 'products route' });
};

export { getAllProductsStatic, getAllProducts };
