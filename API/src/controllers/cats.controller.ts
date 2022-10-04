import CatService from "../modules/cat/cat.service";
import { Request,Response } from "express";
import {ICat} from '../modules/cat/cat.interface'
import { mongoError,successResponse } from "../modules/common/modules.common.service";
export class CatController{
    private catService:CatService = new CatService()

    public create_cat(req:Request,res:Response){
        const cat_params:ICat = {
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            color:req.body.color,
            modification_notes: [{
                modified_on: new Date(Date.now()),
                modified_by: null,
                modification_note: 'New user created'
            }]
        }

        this.catService.createCat(cat_params,(err:any,cat_data:ICat)=>{
            if(err){
                mongoError(err,res)
            }else{
                successResponse('Cat created successfully',cat_data,res)
            }
        })
    }

    public filter_cats(req:Request,res:Response){
        const query_params = {
            price:req.body.price,
            color:req.body.color
        }
        this.catService.filterCats(query_params,(err:any,result:any)=>{
            if(err){
                mongoError(err,res)
            }else{
                successResponse('Filter result',result,res)
            }
        });
    }
    
}