import contact from "../assets/contact.jpg"

function CallToAction() {
  return (
    <div className='bg-slate-200'>
        <div className='max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]'>
            <img src={contact} alt="hosue" className='w-full md:w-1/2 md:h-full object-cover' />

            <div className='p-10'>
                <h5 className='text-lg font-medium text-cyan-700 mb-2 lg:mb-4'>¡Reserva un turno!</h5>

                <p className='text-md text-cyan-700 leading-6 text-justify lg:mb-5'>
                  ¡Déjanos realzar tu belleza! Experimenta servicios de alta calidad en nuestro salón de belleza. 
                  Comunícate hoy para reservar tu tratamiento y sumérgete en un oasis de estilo y relajación. ¡Esperamos verte pronto!
                </p>

                <button className='btn-primary'>Contacto</button>
            </div>
        </div>
    </div>
  )
}

export default CallToAction
