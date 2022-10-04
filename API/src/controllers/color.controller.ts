import ColorService from "../modules/color/color.service";
import { Request,Response } from "express";
import { IColor } from "../modules/color/color.interface";
import { mongoError, successResponse } from "../modules/common/modules.common.service";

export class ColorController{

    private colorService:ColorService = new ColorService()

    public get_all_colors(req:Request,res:Response){
        this.colorService.getAllColors((err:any,data:IColor)=>{
            if(err){
                mongoError(err,res)
            }else{
                res.status(200).json({
                    message:'Color is fetched',
                    data:data
                })
            }
        });
    }

    public create_color(req:Request,res:Response){
        const color_params:IColor = {
            name:req.body.name,
            modification_notes: [{
                modified_on: new Date(Date.now()),
                modified_by: null,
                modification_note: 'New user created'
            }]
        }
        this.colorService.createColor(color_params,(err:any,color_data:IColor)=>{
            if(err){
                mongoError(err,res)
            }else{
                successResponse('Color created successfully',color_data,res)
            }
        })
    }
}