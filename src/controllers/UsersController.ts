import { NextFunction, Request, Response, Router } from "express";
export const UsersController: Router = Router();

UsersController.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("List all the users, TOKEN reuqired");
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
      res.send(`Show a user with ${userId} ID`);
    } catch (e) {
      next(e);
    }
  }
);

UsersController.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("Create a user, TOKEN reuqired");
    } catch (e) {
      next(e);
    }
  }
);