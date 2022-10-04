"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatRoutes = void 0;
const cats_controller_1 = require("../controllers/cats.controller");
class CatRoutes {
    constructor() {
        this.cat_controller = new cats_controller_1.CatController();
    }
    route(app) {
        app.get('/api/cats', (req, res) => {
            res.status(200).json();
        });
        app.post('/api/cats/filter', (req, res) => {
            this.cat_controller.filter_cats(req, res);
        });
        app.post('/api/cats', (req, res) => {
            this.cat_controller.create_cat(req, res);
        });
    }
}
exports.CatRoutes = CatRoutes;
