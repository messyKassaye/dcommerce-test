"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_schema_1 = require("./color.schema");
class ColorService {
    getAllColors(callback) {
        color_schema_1.default.find(callback);
    }
    createColor(color_params, callback) {
        const color = new color_schema_1.default(color_params);
        color.save(callback);
    }
}
exports.default = ColorService;
