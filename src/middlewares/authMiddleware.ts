import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import { tokenToData } from "../utils/jwt";

// Creating custom interface for the req, so typescripts accept the user object on it
export interface RequestCustom extends Request {
  user: User;
}

/*
Puts the user data into the req object, but because Typescript does not like it had to do a workaround
When reading it, just use: // @ts-ignore: Getting user from req
*/

export function authMiddleware(
  expressRequest: Request,
  res: Response,
  next: NextFunction
) {
  const req = expressRequest as RequestCustom;
  const auth = req.headers?.authorization?.split(" ");
  if (!auth || !auth[1]) {
    res.status(401).send({
      message:
        "This endpoint requires an Authorization header with a valid token",
    });
  } else {
    try {
      const data = tokenToData(auth[1]);

      if (!data.user) {
        return res
          .status(404)
          .send("There is a problem with your authentication, login again");
      }
      req.user = data.user;
      return next();
    } catch (error) {
      console.log("ERROR IN AUTH MIDDLEWARE", error);

      switch (error.name) {
        case "TokenExpiredError":
          return res
            .status(401)
            .send({ error: error.name, message: error.message });

        case "JsonWebTokenError":
          return res
            .status(400)
            .send({ error: error.name, message: error.message });

        default:
          return res.status(400).send({
            message: "Something went wrong, sorry",
          });
      }
    }
  }
}
