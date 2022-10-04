import { IColor } from "../modules/color/color.interface";

const  modification_notes =  [{
    modified_on: new Date(Date.now()),
    modified_by: null,
    modification_note: 'New user created'
}];
export const colorsMigration:IColor[] = [
    {
        name:'Black',
        modification_notes:modification_notes
    },
    {
        name:'White',
        modification_notes:modification_notes
    },
    {
        name:'Sparkling',
        modification_notes:modification_notes
    },
    {
        name:'Rose',
        modification_notes:modification_notes
    },
    {
        name:'Orange',
        modification_notes:modification_notes
    }
]