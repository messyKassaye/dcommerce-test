"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const common_model_1 = require("../common/common.model");
const Schema = mongoose.Schema;
const colorSchema = new Schema({
    name: String,
    modification_notes: [common_model_1.ModificationNote]
});
exports.default = mongoose.model('Colors', colorSchema);
