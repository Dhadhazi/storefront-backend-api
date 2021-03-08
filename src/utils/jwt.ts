import jwt from "jsonwebtoken";
import config from "../config";

// Payload is any until it is established what kind of payload should there be
export function signToken(payload: any): string {
  return jwt.sign(payload, config.SECRET);
}

// Payload is any until it is established what kind of payload should there be
export function tokenToData(token: string): any {
  return jwt.verify(token, config.SECRET);
}
