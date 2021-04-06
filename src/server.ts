import express, { Request, Response } from "express";
import config from "./config";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

export const app: express.Application = express();
const port = config.PORT;

app.use(express.urlencoded());

routes(app);

app.use(errorHandler);

app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
