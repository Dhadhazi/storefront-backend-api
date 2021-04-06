import * as dotenv from "dotenv";
dotenv.config();

type Variables = {
  PORT: number;
  POSTGRES_HOST: string;
  POSTGRES_DB: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_PORT: number;
  SECRET: string;
  SALT_ROUNDS: number;
};

export type ConfigType = {
  config: Variables;
};

let config: Variables;

if (process.env.ENV === "test") {
  config = {
    PORT: parseInt(process.env.TEST_PORT || "8000"),
    POSTGRES_HOST: process.env.POSTGRES_TEST_HOST || "",
    POSTGRES_DB: process.env.POSTGRES_TEST_DB || "",
    POSTGRES_USER: process.env.POSTGRES_TEST_USER || "",
    POSTGRES_PASSWORD: process.env.POSTGRES_TEST_PASSWORD || "",
    POSTGRES_PORT: parseInt(process.env.POSTGRES_TEST_PORT || "5432"),
    SECRET: "thisisjustatest",
    SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS || "10"),
  };
}

if (process.env.ENV === "dev") {
  config = {
    PORT: parseInt(process.env.PORT || "8000"),
    POSTGRES_HOST: process.env.POSTGRES_HOST || "",
    POSTGRES_DB: process.env.POSTGRES_DB || "",
    POSTGRES_USER: process.env.POSTGRES_USER || "",
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "",
    POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT || "5432"),
    SECRET: process.env.SECRET || "Should use the ENV file",
    SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS || "10"),
  };
}
//@ts-ignore
export default config;
