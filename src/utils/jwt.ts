import jwt from "jsonwebtoken";
import config from "../config";

// Payload is any until it is established what kind of payload should there be
export function createToken(payload: any): string {
  return jwt.sign(payload, config.SECRET);
}
