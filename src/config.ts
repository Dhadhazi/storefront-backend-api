import * as dotenv from "dotenv";
dotenv.config();

type Variables = {
  PORT: number;
  POSTGRES_HOST: string;
  POSTGRES_DB: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  SECRET: string;
};

export type ConfigType = {
  config: Variables;
};

let config: Variables;

if (process.env.ENV === "test") {
  config = {
    PORT: 8000,
    POSTGRES_HOST: process.env.POSTGRES_TEST_HOST || "",
    POSTGRES_DB: process.env.POSTGRES_TEST_DB || "",
    POSTGRES_USER: process.env.POSTGRES_TEST_USER || "",
    POSTGRES_PASSWORD: process.env.POSTGRES_TEST_PASSWORD || "",
    SECRET: "thisisjustatest",
  };
}

if (process.env.ENV === "dev") {
  config = {
    PORT: 8000,
    POSTGRES_HOST: process.env.POSTGRES_HOST || "",
    POSTGRES_DB: process.env.POSTGRES_DB || "",
    POSTGRES_USER: process.env.POSTGRES_USER || "",
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "",
    SECRET: process.env.SECRET || "Should use the ENV file",
  };
}
//@ts-ignore
export default config;
