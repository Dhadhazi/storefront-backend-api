import jwt from "jsonwebtoken";
import config from "../config";
import { User } from "../models/User";

interface UserObject {
  user: User;
  test?: string; 
}

export function signToken(payload: string | object | Buffer): string {
  return jwt.sign(payload, config.SECRET);
}


export function tokenToData(token: string) {
  return jwt.verify(token, config.SECRET) as UserObject;
}
