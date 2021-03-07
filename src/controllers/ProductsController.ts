import { NextFunction, Request, Response, Router } from "express";
export const ProductsController: Router = Router();

ProductsController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("List all products");
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
    const { productId } = req.params;
    try {
      res.send("Create a product");
    } catch (e) {
      next(e);
    }
  }
);
