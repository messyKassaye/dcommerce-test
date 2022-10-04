import { IColor } from "./color.interface";
import Colors from './color.schema'

export default class ColorService {
    
    public getAllColors(callback:any){
        Colors.find(callback);
    }
    public createColor(color_params:IColor,callback:any){
        const color = new Colors(color_params)
        color.save(callback)
    }
}