import express, { Request, Response } from "express";
import config from "./config";
import { routes } from "./routes";

const app: express.Application = express();
const port = config.PORT;

app.use(express.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Storefront Backend API, please roead REQUIREMENETS.md for routes");
});

routes(app);

app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
