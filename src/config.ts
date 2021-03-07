import * as dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: 8000,
  POSTGRES_URL: process.env.POSTGRES_URL,
};

export default config;
