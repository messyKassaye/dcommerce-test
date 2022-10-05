import { Application,Request,Response } from "express";
import { ColorController } from "../controllers/color.controller";

export class ColorRoutes {
    private color_controller:ColorController = new ColorController()


    public route(app:Application){

        app.get('/api/colors', (req: Request, res: Response) => {
            this.color_controller.get_all_colors(req,res);
         });
        app.post('/api/colors',(req:Request,res:Response)=>{
            this.color_controller.create_color(req,res)
        })
    }
}