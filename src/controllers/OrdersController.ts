import { NextFunction, Request, Response, Router } from "express";
export const OrdersController: Router = Router();

OrdersController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Hello Orders!");
    } catch (e) {
      next(e);
    }
  }
);
