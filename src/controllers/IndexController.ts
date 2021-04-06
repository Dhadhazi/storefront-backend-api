import { Request, Response, Router } from "express";

export const IndexController: Router = Router();

IndexController.get("/", function (req: Request, res: Response) {
  res
    .status(200)
    .send(
      "Storefront Backend API, please read the REQUIREMENETS.md for routes"
    );
});
