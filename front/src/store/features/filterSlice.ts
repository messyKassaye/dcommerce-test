import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    selectedPriceRange:0,
    selectedColors:[],
    applyFiltering:false,
    minPriceRange:4,
    maxPriceRange:237
}

export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setPriceRange:(state,action)=>{
            state.selectedPriceRange = action.payload
        },
        selectColor:(state:any,action)=>{
            state.selectedColors = [...state.selectedColors,action.payload]
        },
        cancelFiltering:(state:any)=>{
            state.selectedPriceRange = 0
            state.selectedColors = []
        },
        applyFilter:(state:any,action)=>{
            state.applyFiltering = action.payload
        }
    }
})

export const {setPriceRange,selectColor,cancelFiltering,applyFilter} = filterSlice.actions
export default filterSlice.reducer