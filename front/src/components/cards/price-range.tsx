import React, {useState} from 'react'
import {BsCurrencyDollar,BsCurrencyEuro} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { Slider,Tooltip } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setPriceRange } from '../../store/features/filterSlice'

export const PriceRange = ()=>{
    const [showPriceRange,setShowPriceRange] = useState(false)
    const dispatch = useAppDispatch()
    const {selectedPriceRange,minPriceRange,maxPriceRange} = useAppSelector(state=>state.filter)


    const handlePlusButtonClick =()=>{
        setShowPriceRange(!showPriceRange)
    }

    const onRangeChange = (newRangeValue:number)=>{
        dispatch(setPriceRange(newRangeValue))
    }


    return (
        <div className="flex flex-col p-2 bg-[#f4f4f2] border-b-2">
            <div className="flex justify-between items-center">
                <button className="flex bg-white rounded-full p-2">
                    <BsCurrencyDollar className='w-6 h-6'/>
                </button>
                <button onClick={handlePlusButtonClick} className="bg-white rounded-full p-1 border-2 border-black">
                    <AiOutlinePlus className='w-6 h-6'/>
                </button>
            </div>

            {
                showPriceRange && (
                    <div className='flex flex-col'>
                        <Slider
                         min={minPriceRange}
                         max={maxPriceRange}
                         onChange={onRangeChange}
                         value={typeof selectedPriceRange === 'number'?selectedPriceRange:0}
                        />
                        <div className='flex justify-between items-center'>
                            <p className='flex text-gray-500 justify-center items-center'>
                              {minPriceRange} <BsCurrencyEuro className='w-3 h-3'/>
                            </p>

                            <p className='flex text-gray-500 justify-center items-center'>
                              {maxPriceRange} <BsCurrencyEuro className='w-3 h-3'/>
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
