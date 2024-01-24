import logo from "../assets/logo.png"

function Footer() {
  return (
    <>
        <div className='max-w-[1200px] mx-auto bg-black'>
      <div className='flex flex-col items-center justify-center p-8'>
        <img className='w-20 mb-6' src={logo} alt="logo" />

        <ul className='flex justify-center gap-6 flex-wrap'>
            <li>
                <a href='' className='text-md text-cyan-600 hover:font-medium' >
                    Inicio
                </a>
            </li>
            <li>
                <a href='' className='text-md text-cyan-600 hover:font-medium' >
                    Sercicios
                </a>
            </li>
            <li>
                <a href='' className='text-md text-cyan-600 hover:font-medium' >
                    Trabajos
                </a>
            </li>
            <li>
                <a href='' className='text-md text-cyan-600 hover:font-medium' >
                    Testimonios
                </a>
            </li>
        </ul>
        
      </div>
    </div>

    <div className="bg-cyan-800 text-xs text-white text-center p-4">
        © 2024, Todos los derechos reservados
    </div>
    </>
  )
}

export default Footer
