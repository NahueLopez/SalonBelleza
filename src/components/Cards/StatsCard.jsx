
function StatsCard({iconUrl, titulo, texto}) {
  return (
    <div className='min-w-48 flex flex-col items-center justify-center py-6 sm:py-14'>
        <div className='w-14 h-14 flex justify-center items-center bg-slate-300 rounded-full'>
            <img src={iconUrl} alt={titulo} className='w-10 h-10' />
        </div>

        <p className='text-xl md:text-2xl text-cyan-600 font-medium mt-4'> {titulo}</p>
        <span className='text-sm md:text-md text-cyan-600 mt-3 mx-4'> {texto}</span>
    </div>
  )
}

export default StatsCard
