"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
var routes_1 = require("./routes");
var app = express_1["default"]();
var port = config_1["default"].PORT;
app.use(express_1["default"].json());
app.get("/", function (req, res) {
    res.send("Storefront Backend API, please roead REQUIREMENETS.md for routes");
});
routes_1.routes(app);
app.listen(port, function () {
    console.log("Server is listening on port " + port);
});
