import { PriceRange } from "./cards"

export const SideBar = ()=>{

    return (
        <div className="md:flex hidden flex-col w-[240px] py-2 bg-white md:border-r-2 text-black">
            <div className="p-1 border-b-2">
                <p className="text-2xl font-bold">Filter</p>
            </div>
            <PriceRange/>
            
        </div>
    )
}