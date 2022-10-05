"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const environment_1 = require("./environment");
const http = require("http");
const port = environment_1.default.getPort();
const server = http.createServer(app_1.default);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
