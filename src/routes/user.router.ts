import { UserController } from "../controllers/user.controller";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<UserController>{

    constructor(){
        super(UserController)
    }

    public routes(): void {
        this.router.get("/user", (request, response) => this.controller.getUser(request, response));
    } 
}