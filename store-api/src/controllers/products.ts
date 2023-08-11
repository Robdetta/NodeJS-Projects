import { Request, Response } from 'express';

const getAllProductsStatic = async (req: Request, res: Response) => {
  res.status(200).json({ msg: 'products testing route' });
};

const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).json({ msg: 'products route' });
};

export { getAllProductsStatic, getAllProducts };
