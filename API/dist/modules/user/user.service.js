"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
class UserService {
    createUser(user_params, callback) {
        const session = new user_schema_1.default(user_params);
        session.save(callback);
    }
    filterUsers(query, callback) {
        user_schema_1.default.findOne(query, callback);
    }
}
exports.default = UserService;
