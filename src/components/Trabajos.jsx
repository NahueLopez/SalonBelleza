import peluqueria from "../assets/peluqueria.jpg"
import tinte from "../assets/tinte.jpg"
import manicura from "../assets/manicura.jpg"
import facial from "../assets/facial.jpg"
import corporal from "../assets/corporal.jpg"
import masajes from "../assets/masajes.jpg"


function Trabajos() {
  return (
    <section id="trabajos" className='max-w-[1200px] pt-8 mx-auto'>
        <h5 className='text-2xl font-semibold text-cyan-600 text-center mb-16'>Nuestros Trabajos</h5>

        <div className='grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2'>
            <div className='md:col-span-2'>
                <img src={peluqueria} alt="" className='galeria-img' />
            </div>
            <div className=''>
                <img src={tinte} alt="" className='galeria-img' />
            </div>
            <div className=''>
                <img src={manicura} alt="" className='galeria-img' />
            </div>
            <div className=''>
                <img src={facial} alt="" className='galeria-img' />
            </div>
            <div className=''>
                <img src={corporal} alt="" className='galeria-img' />
            </div>
            <div className='md:col-span-2'>
                <img src={masajes} alt="" className='galeria-img' />
            </div>
        </div>
    </section>
  )
}

export default Trabajos
