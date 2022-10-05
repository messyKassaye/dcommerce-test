import * as mongoose from 'mongoose'
import { ModificationNote } from '../common/common.model'
const Schema = mongoose.Schema

const colorSchema = new Schema({
    name:String,
    modification_notes:[ModificationNote]
})

export default mongoose.model('Colors',colorSchema);