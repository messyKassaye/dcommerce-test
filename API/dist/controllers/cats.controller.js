"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatController = void 0;
const cat_service_1 = require("../modules/cat/cat.service");
const modules_common_service_1 = require("../modules/common/modules.common.service");
class CatController {
    constructor() {
        this.catService = new cat_service_1.default();
    }
    create_cat(req, res) {
        const cat_params = {
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            color: req.body.color,
            modification_notes: [{
                    modified_on: new Date(Date.now()),
                    modified_by: null,
                    modification_note: 'New user created'
                }]
        };
        this.catService.createCat(cat_params, (err, cat_data) => {
            if (err) {
                (0, modules_common_service_1.mongoError)(err, res);
            }
            else {
                (0, modules_common_service_1.successResponse)('Cat created successfully', cat_data, res);
            }
        });
    }
    filter_cats(req, res) {
        const query_params = {
            price: req.body.price,
            color: req.body.color
        };
        this.catService.filterCats(query_params, (err, result) => {
            if (err) {
                (0, modules_common_service_1.mongoError)(err, res);
            }
            else {
                res.status(200).json(result);
            }
        });
    }
}
exports.CatController = CatController;
