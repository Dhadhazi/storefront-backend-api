import { NextFunction, Request, Response, Router } from "express";
export const OrdersController: Router = Router();

OrdersController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Show current orders by user, TOKEN Reuqired");
    } catch (e) {
      next(e);
    }
  }
);

OrdersController.get(
  "/completed/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Show completed orders by user, TOKEN Reuqired");
    } catch (e) {
      next(e);
    }
  }
);
