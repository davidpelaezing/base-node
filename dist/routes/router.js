"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = require("express");
class BaseRouter {
    constructor(controller) {
        this.controller = new controller();
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() { }
}
exports.BaseRouter = BaseRouter;
