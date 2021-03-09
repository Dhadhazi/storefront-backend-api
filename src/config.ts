import * as dotenv from "dotenv";
dotenv.config();

const config =
  process.env.ENV === "test"
    ? {
        PORT: 8000,
        POSTGRES_HOST: process.env.POSTGRES_TEST_HOST,
        POSTGRES_DB: process.env.POSTGRES_TEST_DB,
        POSTGRES_USER: process.env.POSTGRES_TEST_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_TEST_PASSWORD,
        SECRET: "thisisjustatest",
      }
    : {
        PORT: 8000,
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_DB: process.env.POSTGRES_DB,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        SECRET: process.env.SECRET || "Should use the ENV file",
      };

export default config;
