import { Request, Response, NextFunction } from "express";

// There can be many types or error, and since it is a global handler, it uses any for that
export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  res.status(500);
  res.send(`There was an error: ${err}`);
}
