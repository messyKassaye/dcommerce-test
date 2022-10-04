"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../modules/user/user.service");
const modules_common_service_1 = require("../modules/common/modules.common.service");
class UserController {
    constructor() {
        this.userService = new user_service_1.default();
    }
    create_user(req, res) {
        // this check whether all the filds were send through the erquest or not
        if (req.body.name && req.body.email) {
            const user_params = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                modification_notes: [{
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'New user created'
                    }]
            };
            this.userService.createUser(user_params, (err, user_data) => {
                if (err) {
                    console.log(err);
                    (0, modules_common_service_1.mongoError)(err, res);
                }
                else {
                    (0, modules_common_service_1.successResponse)('create user successfull', user_data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            (0, modules_common_service_1.insufficientParameters)(res);
        }
    }
}
exports.UserController = UserController;
