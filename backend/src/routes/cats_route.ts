import { Application,Request,Response } from "express";
import { CatController } from "../controllers/cats.controller";

export class CatRoutes {
    private cat_controller:CatController = new CatController()

    public route(app:Application){
        app.get('/api/cats', (req: Request, res: Response) => {
            res.status(200).json();
         });

        app.post('/api/cats/filter',(req:Request,res:Response)=>{
            this.cat_controller.filter_cats(req,res)
        })

        app.post('/api/cats',(req:Request,res:Response)=>{
            this.cat_controller.create_cat(req,res)
        })
    }
}