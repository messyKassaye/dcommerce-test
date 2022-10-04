import * as mongoose from 'mongoose'
import { ModificationNote } from '../common/common.model'

const Schema = mongoose.Schema

const catSchema = new Schema({
    name:String,
    description:String,
    color:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Colors'
    },
    modification_notes:[ModificationNote]
})

export default mongoose.model('Cats',catSchema)