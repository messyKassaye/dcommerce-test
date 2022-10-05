"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const common_model_1 = require("../common/common.model");
const Schema = mongoose.Schema;
const catSchema = new Schema({
    name: String,
    description: String,
    image: String,
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colors'
    },
    modification_notes: [common_model_1.ModificationNote]
});
exports.default = mongoose.model('Cats', catSchema);
