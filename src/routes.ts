import { Application, Router } from "express";
import { IndexController } from "./controllers/IndexController";
import { OrdersController } from "./controllers/OrdersController";
import { ProductsController } from "./controllers/ProductsController";
import { UsersController } from "./controllers/UsersController";

const _routes: [string, Router][] = [
  ["/", IndexController],
  ["/products", ProductsController],
  ["/users", UsersController],
  ["/orders", OrdersController],
];

export const routes = (app: Application): void => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
