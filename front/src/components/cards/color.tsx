import {BsCheck2Circle} from 'react-icons/bs'
import {Button} from 'antd'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectColor } from '../../store/features/filterSlice'

export const Color = ({color}:any)=>{
    const dispatch = useAppDispatch()
    const {selectedColors} = useAppSelector(state=>state.filter)

    const onColorSelected =()=>{
        dispatch(selectColor(color))
    }

    const isSelected = ()=>{
        return selectedColors.some((c:any)=>c.name===color.name)
    }
    return (
        <div onClick={()=>onColorSelected()} className="flex justify-between items-center p-4 border-b-2 cursor-pointer">
            <span className={`${isSelected()?'text-black font-bold':'text-gray-500'}`}>{color?.name}</span>
            <Button type='text' disabled={isSelected()?false:true}>
                <BsCheck2Circle className='w-5 h-5'/>
            </Button>
        </div>
    )
}