"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const test_routes_1 = require("../routes/test_routes");
const common_routes_1 = require("../routes/common_routes");
const environment_1 = require("../environment");
const mongoose_1 = require("mongoose");
const color_route_1 = require("../routes/color_route");
const cats_route_1 = require("../routes/cats_route");
const migration_service_1 = require("../migration/migration.service");
const cors = require("cors");
class App {
    constructor() {
        this.mongoURL = `mongodb://localhost:27017/${environment_1.default.getDBName()}`;
        this.test_routes = new test_routes_1.TestRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.color_route = new color_route_1.ColorRoutes();
        this.cat_routes = new cats_route_1.CatRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
        this.color_route.route(this.app);
        this.cat_routes.route(this.app);
        this.common_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(cors());
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose_1.default.connect(this.mongoURL, () => {
            console.log('Database is connected');
            migration_service_1.MigrationService.migrate();
        });
    }
}
exports.default = new App().app;
