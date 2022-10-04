import { ModificationNote } from "../common/common.model";

export interface IColor{
    _id?:String,
    name:String,
    modification_notes:ModificationNote[]
}