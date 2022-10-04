import * as express from "express";
import * as bodyParser from "body-parser";
import { TestRoutes } from "../routes/test_routes";
import { CommonRoutes } from "../routes/common_routes";
import environment from "../environment";
import mongoose from "mongoose";
import { ColorRoutes } from "../routes/color_route";
import { CatRoutes } from "../routes/cats_route";
import { MigrationService } from "../migration/migration.service";
import * as cors from 'cors'
class App {
   public app: express.Application;
   public mongoURL:string = `mongodb://localhost:27017/${environment.getDBName()}`
   private test_routes:TestRoutes = new TestRoutes()
   private common_routes:CommonRoutes = new CommonRoutes()
   private color_route:ColorRoutes = new ColorRoutes()
   private cat_routes:CatRoutes = new CatRoutes()

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.test_routes.route(this.app)
      this.color_route.route(this.app)
      this.cat_routes.route(this.app)
      this.common_routes.route(this.app)
   }
private config(): void {
      // support application/json type post data
      this.app.use(cors())
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));

   }

   private mongoSetup(): void {
    mongoose.connect(this.mongoURL,()=>{
            console.log('Database is connected')
            MigrationService.migrate()
        });
 }
}
export default new App().app;