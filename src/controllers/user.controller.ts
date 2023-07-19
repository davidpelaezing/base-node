import { Request, Response } from "express";

export class UserController {

    public getUser(request: Request, response: Response){
        return response.status(200).json({
            name: 'David',
            lastname: 'Peláez',
            phone: "3113839839"
        });
    }

}