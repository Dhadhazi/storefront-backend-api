import * as dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: 8000,
  POSTGRES_URL: process.env.POSTGRES_URL,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  SECRET: process.env.SECRET || "Should use the ENV file",
};

export default config;
