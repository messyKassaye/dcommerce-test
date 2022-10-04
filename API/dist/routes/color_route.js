"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorRoutes = void 0;
const color_controller_1 = require("../controllers/color.controller");
class ColorRoutes {
    constructor() {
        this.color_controller = new color_controller_1.ColorController();
    }
    route(app) {
        app.post('/api/colors', (req, res) => {
            this.color_controller.create_color(req, res);
        });
    }
}
exports.ColorRoutes = ColorRoutes;
