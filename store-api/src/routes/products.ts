import express, { Router } from 'express';
import { getAllProductsStatic, getAllProducts } from '../controllers/products';

const router: Router = express.Router();

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);

export { router };
