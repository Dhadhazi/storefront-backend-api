import { NextFunction, Request, Response, Router } from "express";
export const UsersController: Router = Router();

UsersController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Hello Users!");
    } catch (e) {
      next(e);
    }
  }
);
