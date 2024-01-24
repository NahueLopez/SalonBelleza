
function ServiciosInfoCard({ imgUrl, titulo, descripcion}) {
  return (
    <div className="bg-slate-200 flex flex-col mt-20 md:mt-0 md:even:flex-row-reverse md:odd:flex-row">
        <div className="flex-1">
            <img src={imgUrl} alt={titulo} className='w-full h-80 md:h-100' />

        </div>
        
        <div className="flex-1">
            <div className="p-10">
                <h6 className="text-md md:text-xl text-cyan-600 font-medium mb-3">{titulo}</h6>
                <p className="text-sm md:text-sm leading-6 text-cyan-600 whitespace-pre-line">{descripcion}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiciosInfoCard
