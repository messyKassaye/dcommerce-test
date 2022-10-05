"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorController = void 0;
const color_service_1 = require("../modules/color/color.service");
const modules_common_service_1 = require("../modules/common/modules.common.service");
class ColorController {
    constructor() {
        this.colorService = new color_service_1.default();
    }
    get_all_colors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const color_data = yield this.colorService.getAllColors();
            console.log(color_data);
            (0, modules_common_service_1.successResponse)('Color created successfully', color_data, res);
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
