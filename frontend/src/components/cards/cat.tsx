 export const Cat = ({cat}:any)=>{
  return (
    <div className="flex flex-col border-2 border-gray-100 mb-5 w-[500px] p-2">
       <img src={cat?.image} className='w-full h-[250px]'/>
       <span className="font-bold text-3xl">{cat?.name}</span>
       <span className="flex text-gray-500">{cat?.description}</span>
    </div>
  )
}