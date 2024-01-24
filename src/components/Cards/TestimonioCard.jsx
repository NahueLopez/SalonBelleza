

function TestimonioCard({ nombre, imgUrl, titulo, mensaje }) {
  
    return (
    
        <div className='bg-white rounded.md p-5 border mx-2'>   
        <div className='flex items-center gap-3 mb-4'>
            <img src={imgUrl} alt={nombre} className='w-14 h-14 md:h-16 rounded-full' />

            <div className=''>
                <p className='text-sm md:text-base mb-1'>{nombre}</p>
            </div>
        </div>

        <h6 className='text-sm md:text-base font-medium mb-1'>{titulo}</h6>
        <span className='text-xs md:text-[13px] text-slate-500'>{mensaje}</span>
        </div>
  )
}

export default TestimonioCard
