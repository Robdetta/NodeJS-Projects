import { Request, Response } from 'express';
import { productsDB } from '../models/products';

const getAllProductsStatic = async (req: Request, res: Response) => {
  const products = await productsDB
    .find({ price: { $gt: 30 } })
    .sort('price')
    .select('name price');

  res.status(200).json({ products, hbHits: products.length });
};

const getAllProducts = async (req: Request, res: Response) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject: {
    [key: string]: boolean | string | object | undefined;
    featured?: boolean;
    company?: string;
    name?: object;
    sort?: string;
    fields?: string;
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
  if (typeof numericFilters === 'string') {
    const operatorMap: Record<string, string> = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;

    // Convert numericFilters to a string if it's an array
    const numericFiltersString = Array.isArray(numericFilters)
      ? numericFilters.join(',')
      : numericFilters;

    const filters = numericFiltersString.replace(
      regEx,
      (match: string | number) => `-${operatorMap[match]}-`,
    );

    const options = ['price', 'rating'];
    filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = productsDB.find(queryObject as object);
  //sort
  if (sort) {
    const sortList = (sort as string).split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  if (fields) {
    const fieldsList = (fields as string).split(',').join(' ');
    result = result.select(fieldsList);
  }

  const page: number = Number(req.query.page) || 1;
  const limit: number = Number(req.query.limit) || 10;
  const skip: number = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  const products = await result;
  res.status(200).json({ products, hbHits: products.length });
};

export { getAllProductsStatic, getAllProducts };
