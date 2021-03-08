import { NextFunction, Request, Response, Router } from "express";
import { UserStore } from "../models/User";
import { encryptPassword } from "../utils/password";
export const UsersController: Router = Router();

const store = new UserStore();

UsersController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUsers = await store.getAll();
      res.status(200).json(allUsers);
    } catch (e) {
      next(e);
    }
  }
);

UsersController.get(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = parseInt(req.params.userId);
    try {
      const allUsers = await store.getUser(userId);
      res.status(200).json(allUsers);
    } catch (e) {
      next(e);
    }
  }
);

UsersController.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, password } = req.body;
    try {
      if (!firstName || !lastName || !password) {
        throw new Error("firstName, lastName and password must be given");
      }
      const hashed = await encryptPassword(password);
      const createUser = await store.createUser(firstName, lastName, hashed);
      res.status(200).json(createUser);
    } catch (e) {
      console.log("Catching");
      next(e);
    }
  }
);
