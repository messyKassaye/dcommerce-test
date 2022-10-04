import { PriceRange } from "./cards"
import { Colors } from "./colors"
import {Button} from 'antd'
import { useAppDispatch } from "../store/hooks"
import { applyFilter, cancelFiltering } from "../store/features/filterSlice"
export const SideBar = ()=>{
     const dispatch = useAppDispatch()

    const onCancel =()=>{
        dispatch(cancelFiltering())
    }

    const onApply =()=>{
        dispatch(applyFilter(true))
    }
    return (
        <div className="md:flex hidden flex-col w-[240px] py-2 bg-white md:border-r-2 text-black">
            <div className="p-1 border-b-2">
                <p className="text-2xl font-bold">Filter</p>
            </div>
            <PriceRange/>
            <Colors/>

            <div className="flex justify-end items-center gap-3 p-4 mt-2">
                <Button onClick={onCancel} type="default">Cancel</Button>
                <Button onClick={onApply} type="primary" className="flex bg-[#2621cb] text-white hover:bg-[#2621cb] focus:bg-[#2621cb]">
                    Apply
                </Button>
            </div>
        </div>
    )
}