import { TESTIMONIOS } from '../../utils/data'

function Pagination({active}) {
  return (
    <div className='flex items-center justify-center gap-3'>
      {TESTIMONIOS.map((item,index)=>(
        <div key={item.id} className={`w-8 h-1 ${active === index 
            ?  "bg-blue-600"
            : "bg-blue-100"
            } rounded-md transition-all duration-500`}>

        </div>
      ))}
    </div>
  )
}

export default Pagination
