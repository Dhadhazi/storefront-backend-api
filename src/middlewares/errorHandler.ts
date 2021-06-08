import { Request, Response, NextFunction } from "express";
import HttpException from "../models/HttpException";

export function errorHandler(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  res.status(500);
  res.send(`There was an error: ${err}`);
}
