import { Sequelize } from "sequelize";
import config from "../src/config";

const sequelize = new Sequelize(config.POSTGRES_URL);

async function connectToDatabase() {
  console.log(process.env.POSTGRES_URL);
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default connectToDatabase;
