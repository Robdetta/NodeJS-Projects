import { Request, Response } from 'express';
import { productsDB } from '../models/products';

const getAllProductsStatic = async (req: Request, res: Response) => {
  const search: string = 'ab';
  const products = await productsDB.find({
    name: { $regex: search, $options: 'i' },
  });
  res.status(200).json({ products, hbHits: products.length });
};

const getAllProducts = async (req: Request, res: Response) => {
  const { featured, company, name } = req.query;
  const queryObject: {
    featured?: boolean;
    company?: string;
    name?: object;
  } = {};
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company as string;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  console.log(queryObject);
  const products = await productsDB.find(queryObject as object);
  res.status(200).json({ products, hbHits: products.length });
};

export { getAllProductsStatic, getAllProducts };
