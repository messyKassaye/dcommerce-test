import { ICat } from "./cat.interface";
import Cats from './cat.schema'

export default class CatService {
    public createCat(cat_params:ICat,callback:any){
        const cat = new Cats(cat_params);
        cat.save(callback)
    }
}