"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorController = void 0;
const color_service_1 = require("../modules/color/color.service");
const modules_common_service_1 = require("../modules/common/modules.common.service");
class ColorController {
    constructor() {
        this.colorService = new color_service_1.default();
    }
    get_all_colors(req, res) {
        this.colorService.getAllColors((err, data) => {
            if (err) {
                (0, modules_common_service_1.mongoError)(err, res);
            }
            else {
                res.status(200).json({
                    message: 'Color is fetched',
                    data: data
                });
            }
        });
    }
    create_color(req, res) {
        const color_params = {
            name: req.body.name,
            modification_notes: [{
                    modified_on: new Date(Date.now()),
                    modified_by: null,
                    modification_note: 'New user created'
                }]
        };
        this.colorService.createColor(color_params, (err, color_data) => {
            if (err) {
                (0, modules_common_service_1.mongoError)(err, res);
            }
            else {
                (0, modules_common_service_1.successResponse)('Color created successfully', color_data, res);
            }
        });
    }
}
exports.ColorController = ColorController;
