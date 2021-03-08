import { NextFunction, Request, Response, Router } from "express";
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
  "/top/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("List TOP 5 products");
    } catch (e) {
      next(e);
    }
  }
);

ProductsController.get(
  "/category/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("List products ordered by category");
    } catch (e) {
      next(e);
    }
  }
);

ProductsController.get(
  "/:productId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { productId } = req.params;
    try {
      res.send(`Show a product with ${productId} ID`);
    } catch (e) {
      next(e);
    }
  }
);

ProductsController.post(
  "/",
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
