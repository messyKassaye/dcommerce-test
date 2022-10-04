import { Application,Request,Response } from "express";

export class CommonRoutes {
    public route(app:Application){
        app.all('*',(req:Request,res:Response)=>{
            res.status(404).send({
                error:true,
                message:'Incorrect URL given. Please check your URL and try again'
            })
        })
    }
}