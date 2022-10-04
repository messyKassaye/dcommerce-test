import { useAppDispatch, useAppSelector } from "../store/hooks"
import {useEffect} from 'react'
import { filterCats } from "../store/features/filterSlice"
import { LoadingSkelton } from "../shared/loading-skeleton"
import { Cat } from "../components/cards/cat"
import {Alert} from 'antd'
export const FilterResultPage = ()=>{
     const {selectedColors,selectedPriceRange,applyFiltering,filteredCats} = useAppSelector(state=>state.filter)
     const {loading,error,data,isSuccess} = filteredCats
     const dispatch = useAppDispatch();

     useEffect(() => {
        if(applyFiltering){
            startFiltering()
        }
     }, [applyFiltering])

     const startFiltering = ()=>{
        const formData = {
            price:selectedPriceRange,
            color:selectedColors
        }
        dispatch(filterCats(formData))            
     }
     
     if(loading) return <LoadingSkelton/>

     if(data.length<=0) return <Alert className="mt-5" type="error" message="No selected data until now. Please select price and color of your preferred cat"/>
     
     return (
        <div>
            {data?.map((cat:any)=>(
                <Cat key={cat._id} cat={cat}/>
            ))}
        </div>
    )
}