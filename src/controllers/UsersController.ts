import { NextFunction, Request, Response, Router } from "express";
import { UserStore } from "../models/User";
export const UsersController: Router = Router();

const store = new UserStore();

UsersController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("List all the users, TOKEN required");
    } catch (e) {
      next(e);
    }
  }
);

UsersController.get(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    try {
      res.send(`Show a user with ${userId} ID, TOKEN required`);
    } catch (e) {
      next(e);
    }
  }
);

UsersController.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName } = req.body;
    const password = req.body.password;
    try {
      const createProduct = await store.createUser(
        firstName,
        lastName,
        password
      );
      res.status(200).json(createProduct);
    } catch (e) {
      next(e);
    }
  }
);
