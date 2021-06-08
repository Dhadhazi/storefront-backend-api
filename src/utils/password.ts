import config from "../config";

const bcrypt = require("bcrypt");
const saltRounds = config.SALT_ROUNDS;

export async function encryptPassword(password: string): Promise<string> {
  try {
    password = await bcrypt.hash(password, saltRounds);
  } catch (e) {
    console.log(e);
  }
  return password;
}
