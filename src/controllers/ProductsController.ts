import { NextFunction, Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { ProductStore } from "../models/Product";
export const ProductsController: Router = Router();

const store = new ProductStore();

ProductsController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allProducts = await store.getAll();
      res.status(200).json(allProducts);
    } catch (e) {
      next(e);
    }
  }
);

ProductsController.get(
  "/category/:category",
  async (req: Request, res: Response, next: NextFunction) => {
    const category = req.params.category;
    try {
      const allProducts = await store.getAllByCategory(category);
      res.status(200).json(allProducts);
    } catch (e) {
      next(e);
    }
  }
);

ProductsController.get(
  "/top/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const top = await store.getTop5();
      res.status(200).json(top);
    } catch (e) {
      next(e);
    }
  }
);

ProductsController.get(
  "/:productId",
  async (req: Request, res: Response, next: NextFunction) => {
    const productId = parseInt(req.params.productId);
    try {
      const product = await store.getProduct(productId);
      res.status(200).json(product);
    } catch (e) {
      next(e);
    }
  }
);

ProductsController.post(
  "/",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, category } = req.body;
    const price = Number(req.body.price);
    try {
      const createProduct = await store.addProduct(name, price, category);
      res.status(200).json(createProduct);
    } catch (e) {
      next(e);
    }
  }
);
