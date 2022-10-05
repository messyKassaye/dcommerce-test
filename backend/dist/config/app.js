"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const test_routes_1 = require("../routes/test_routes");
const common_routes_1 = require("../routes/common_routes");
const environment_1 = require("../environment");
const color_route_1 = require("../routes/color_route");
const cats_route_1 = require("../routes/cats_route");
const mongoose = require("mongoose");
const migration_service_1 = require("../migration/migration.service");
const cors = require("cors");
class App {
    constructor() {
        this.mongoURL = `mongodb://host.docker.internal:27017/${environment_1.default.getDBName()}`;
        // mongo_url to connect to mongo db from host machine from docker container
        // mongo_url = `mongodb://host.docker.internal:27017/${environment.getDBName()}`
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
        const options = {
            useNewUrlParser: true,
            autoIndex: false,
            maxPoolSize: 10, // Maintain up to 10 socket connections
        };
        const connectWithRetry = () => {
            console.log('MongoDB connection with retry');
            mongoose
                .connect(this.mongoURL, options)
                .then(() => {
                console.log('MongoDB is connected');
                migration_service_1.MigrationService.migrate();
            })
                .catch((err) => {
                console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', err);
                setTimeout(connectWithRetry, 5000);
            });
        };
        connectWithRetry();
    }
}
exports.default = new App().app;
