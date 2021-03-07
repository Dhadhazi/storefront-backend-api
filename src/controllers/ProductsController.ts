import { NextFunction, Request, Response, Router } from "express";
export const ProductsController: Router = Router();

ProductsController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Hello Products!");
    } catch (e) {
      next(e);
    }
  }
);
