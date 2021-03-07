"use strict";
exports.__esModule = true;
exports.routes = void 0;
var OrdersController_1 = require("./controllers/OrdersController");
var ProductsController_1 = require("./controllers/ProductsController");
var UsersController_1 = require("./controllers/UsersController");
var _routes = [
    ["/products", ProductsController_1.ProductsController],
    ["/users", UsersController_1.UsersController],
    ["/orders", OrdersController_1.OrdersController],
];
var routes = function (app) {
    _routes.forEach(function (route) {
        var url = route[0], controller = route[1];
        app.use(url, controller);
    });
};
exports.routes = routes;
