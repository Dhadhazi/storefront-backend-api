import jwt from "jsonwebtoken";
import config from "../config";

export function signToken(payload: string | object | Buffer): string {
  return jwt.sign(payload, config.SECRET);
}

/*
Return is any type,  because it is universally extracts the token data, 
therefore no shape should be configured so it can be used to any kind of token
*/
export function tokenToData(token: string): any {
  return jwt.verify(token, config.SECRET);
}
