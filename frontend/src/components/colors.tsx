import { LoadingSkelton } from '../shared/loading-skeleton'
import { useGetAllColorQuery } from '../store/services/filterCoreApi'
import { Color } from './cards'
export const Colors = ()=>{
    const {data,isFetching,error} = useGetAllColorQuery()

    if(isFetching) return <LoadingSkelton/>
    
    return (
        <div className='flex flex-col'>
            {data?.data?.map((color:any)=>(
                <Color key={color?._id} color={color}/>
            ))}
        </div>
    )
}