import { NextFunction, Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { OrderStore } from "../models/Orders";
export const OrdersController: Router = Router();

const store = new OrderStore();

OrdersController.get(
  "/",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore: Getting user from req
      const user = req.user;
      res.send(`Show current orders by id: ${user.id}`);
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

// Creates new order
OrdersController.post(
  "/createOrder/",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore: Getting user from req
      const user = req.user;
      const order = await store.createOrder(user.id);
      res.status(200).json(order);
    } catch (e) {
      next(e);
    }
  }
);

// Adds product to the order
OrdersController.post(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { quantity, productId } = req.body;
      const orderId = parseInt(req.params.id);
      console.log(quantity, productId);
      const addProduct = await store.addProduct(quantity, orderId, productId);
      res.status(200).json(addProduct);
    } catch (e) {
      next(e);
    }
  }
);
