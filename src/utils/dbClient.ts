import { Pool } from "pg";
import config from "../config";

const dbClient = new Pool({
  host: config.POSTGRES_HOST,
  database: config.POSTGRES_DB,
  user: config.POSTGRES_USER,
  password: config.POSTGRES_PASSWORD,
  port: config.POSTGRES_PORT,
});

export default dbClient;
