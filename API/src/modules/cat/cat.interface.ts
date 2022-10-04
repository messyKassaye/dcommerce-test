import { IColor } from "../color/color.interface";
import { ModificationNote } from "../common/common.model";

export interface ICat{
    _id?:String,
    name:String,
    image:String,
    price:Number,
    description:String
    color:IColor,
    modification_notes:ModificationNote[]
}