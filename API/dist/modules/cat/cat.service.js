"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_schema_1 = require("./cat.schema");
class CatService {
    createCat(cat_params, callback) {
        const cat = new cat_schema_1.default(cat_params);
        cat.save(callback);
    }
    filterCats(query_params, callback) {
        const query = { price: { $lte: query_params.price }, color: query_params.color };
        cat_schema_1.default.find(query, callback);
    }
}
exports.default = CatService;
