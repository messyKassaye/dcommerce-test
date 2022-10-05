import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import filterService from "../services/filter.service";

const initialState = {
    selectedPriceRange:0,
    selectedColors:[],
    applyFiltering:false,
    minPriceRange:4,
    maxPriceRange:237,
    filteredCats:{
        loading:false,
        error:false,
        errorMessage:'',
        isSuccess:false,
        data:[]
    }
}

// filter cats
export const filterCats = createAsyncThunk(
    "filter/filterCats",
    async (filterData:any, thunkAPI) => {
        try {
            return await filterService.filterCats(filterData);

        } catch (error:any) {
            const message =
                (error?.response &&
                    error?.response.data &&
                    error?.response.data.message) ||
                error?.message ||
                error?.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

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
            state.applyFiltering = false
            state.filteredCats = {
                loading:false,
                error:false,
                errorMessage:'',
                isSuccess:false,
                data:[]
            }
        },
        applyFilter:(state:any,action)=>{
            state.applyFiltering = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(filterCats.pending, (state) => {
                state.filteredCats.loading = true
            })
            .addCase(filterCats.fulfilled, (state, action) => {
                state.filteredCats.loading = false
                state.filteredCats.isSuccess = true
                state.filteredCats.data = action.payload
            })
            .addCase(filterCats.rejected, (state, action) => {
                state.filteredCats.loading = false
                state.filteredCats.error = true
                state.filteredCats.errorMessage = 'Something is wrong.'
                state.filteredCats.data = []
            })
    }
})

export const {setPriceRange,selectColor,cancelFiltering,applyFilter} = filterSlice.actions
export default filterSlice.reducer