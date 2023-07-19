import { Router } from "express";

export class BaseRouter<T> {
    
    public router: Router;
    public controller: T;

    constructor(controller: {new (): T}) {
        this.controller = new controller();
        this.router = Router();
        this.routes();
    }

    public routes(){}
}