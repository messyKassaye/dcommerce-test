"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = require("../controllers/user.controller");
class UserRoutes {
    constructor() {
        this.user_controller = new user_controller_1.UserController();
    }
    route(app) {
        app.get('/api/user', (req, res) => {
            res.status(200).json({ message: "Get request successfull" });
        });
        app.post('/api/user', (req, res) => {
            this.user_controller.create_user(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
