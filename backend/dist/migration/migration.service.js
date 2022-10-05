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
exports.MigrationService = void 0;
const colors_migration_1 = require("./colors.migration");
const color_schema_1 = require("../modules/color/color.schema");
const cat_schema_1 = require("../modules/cat/cat.schema");
const cat_migration_1 = require("./cat.migration");
class MigrationService {
    static migrate() {
        this.migrateColor();
        this.migrateCat();
    }
    static migrateColor() {
        color_schema_1.default.find().then(colors => {
            if (colors.length <= 0) {
                colors_migration_1.colorsMigration.forEach(element => {
                    const newColor = new color_schema_1.default(element);
                    newColor.save();
                });
            }
        });
    }
    static migrateCat() {
        return __awaiter(this, void 0, void 0, function* () {
            let colors = yield this.getColors();
            cat_schema_1.default.find().then(cats => {
                if (cats.length <= 0) {
                    cat_migration_1.catsData.forEach(cat => {
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        const newCat = new cat_schema_1.default(Object.assign(Object.assign({}, cat), { color: randomColor }));
                        newCat.save();
                    });
                }
            });
        });
    }
    static getColors() {
        return __awaiter(this, void 0, void 0, function* () {
            return color_schema_1.default.find().then(colors => {
                return colors;
            });
        });
    }
}
exports.MigrationService = MigrationService;
