import { colorsMigration } from "./colors.migration";
import Colors from '../modules/color/color.schema'
import Cats from '../modules/cat/cat.schema'
import { catsData } from "./cat.migration";
export class MigrationService {
    public static migrate(){
        this.migrateColor()
        this.migrateCat()
    }

    public static migrateColor(){
        Colors.find().then(colors=>{
            if(colors.length<=0){
                colorsMigration.forEach(element => {
                    const newColor = new Colors(element);
                    newColor.save()
                 });
            }
        })
       
    }

    public static async migrateCat(){
        let colors = await  this.getColors()
        
        Cats.find().then(cats=>{
            if(cats.length<=0){
                catsData.forEach(cat=>{
                    const randomColor = colors[Math.floor(Math.random()*colors.length)]
                    const newCat = new Cats({
                        ...cat,color:randomColor
                    })
                    newCat.save()
                })
            }
        })
    }

    public static async getColors(){
        return Colors.find().then(colors=>{
            return colors
        })
    }
}