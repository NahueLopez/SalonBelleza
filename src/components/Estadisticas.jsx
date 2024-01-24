import StatsCard from './Cards/StatsCard'
import { ESTADISTICA_DATA } from '../utils/data'

function Estadisticas() {
  return (

    <section className='bg-slate-200'>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-4 mx-10'>
            {ESTADISTICA_DATA.map((item) => (
                <StatsCard
                    key={item.titulo}
                    iconUrl={item.iconUrl}
                    texto={item.texto}
                    titulo={item.titulo}
                />
            ))}      
        </div>
    </section>

  )
}

export default Estadisticas
