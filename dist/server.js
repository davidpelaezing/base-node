"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./routes/user.router");
class ServerBootstrap {
    /**
     * inicializa la clase con las configuraciones
     */
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 8000;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use("/api", this.routes());
        this.listen();
    }
    routes() {
        return [
            new user_router_1.UserRouter().router
        ];
    }
    /**
     * Inicia el servidor
     * @return void
     * @author David Pelaez
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
new ServerBootstrap();
