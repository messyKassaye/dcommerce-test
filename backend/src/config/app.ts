import * as express from "express";
import * as bodyParser from "body-parser";
import { TestRoutes } from "../routes/test_routes";
import { CommonRoutes } from "../routes/common_routes";
import environment from "../environment";
import { ColorRoutes } from "../routes/color_route";
import { CatRoutes } from "../routes/cats_route";
import * as mongoose from "mongoose";
import { MigrationService } from "../migration/migration.service";
import * as cors from 'cors'
class App {
   public app: express.Application;
   public mongoURL:string = `mongodb://host.docker.internal:27017/${environment.getDBName()}`
   // mongo_url to connect to mongo db from host machine from docker container
   // mongo_url = `mongodb://host.docker.internal:27017/${environment.getDBName()}`
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
      const options = {
         useNewUrlParser: true,
         autoIndex: false, // Don't build indexes
         maxPoolSize: 10, // Maintain up to 10 socket connections
      };
      const connectWithRetry = () => {
         console.log('MongoDB connection with retry')
         mongoose
            .connect(this.mongoURL, options)
            .then(() => {
               console.log('MongoDB is connected');
               MigrationService.migrate();
            })
            .catch((err) => {
               console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', err);
               setTimeout(connectWithRetry, 5000);
            });
      };
      connectWithRetry();
   }
}
export default new App().app;
