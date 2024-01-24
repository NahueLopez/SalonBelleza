import ServiciosInfoCard from './Cards/ServiciosInfoCard'
import { SERVICIOS } from '../utils/data'

function Servicios() {
  return (
    <section id="servicios" className='max-w-[1200px] py-16 mx-auto'>
        <h5 className='text-2xl font-semibold text-cyan-600 text-center mb-10'>
            Servicios
        </h5>

        <div className='bg-slate-200 lg:shadow-xl lg:shadow-slate-200/50'>
            
            {SERVICIOS.map((item) => (
                <ServiciosInfoCard
                    key={item.titulo}
                    imgUrl={item.imgUrl}
                    titulo={item.titulo}
                    descripcion={item.descripcion}
                />
            ))}

        </div>
      
    </section>
  )
}

export default Servicios
