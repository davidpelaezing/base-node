"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    getUser(request, response) {
        return response.status(200).json({
            name: 'David',
            lastname: 'Peláez',
            phone: "3113839839"
        });
    }
}
exports.UserController = UserController;
