import { IColor } from "../color/color.interface";
import { ModificationNote } from "../common/common.model";

export interface ICat{
    _id?:String,
    name:String,
    price:Number,
    description:String
    color:IColor,
    modification_notes:ModificationNote[]
}