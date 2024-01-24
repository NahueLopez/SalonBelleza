import { RiMenu4Line, RiCloseFill } from "react-icons/ri"
import { useState } from "react"
import { Link } from "react-scroll"
import MobileNavbar from "./MobileNavbar"
import logo from "../assets/logo.png"


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

   

  return (

    <>

        {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> }
        
        <div className="bg-slate-200 sticky top-0 z-10">
            <nav className="max-w-screen-xl mx-auto py-4 px-6">
                <div className="flex items-center justify-between">
                    <img src={logo} alt="Logo" className="h-11 w-auto object-contain"/>

                    <ul className="hidden md:flex md:gap-14">
                        <li>
                            <Link to="inicio" smooth spy offset={-80} className='menu-item'>Inicio</Link>
                        </li>

                        <li>
                            <Link to="servicios" smooth spy offset={-80} className='menu-item'>Services</Link>
                        </li>

                        <li>
                            <Link to="trabajos" smooth spy offset={-80} className='menu-item'>Trabajos</Link>
                        </li>

                        <li>
                            <Link to="testimonios" smooth spy offset={-80} className='menu-item'>Testimonios</Link>
                        </li>
                    </ul>
                    
                    <button className="hidden btn-primary md:block">Contacto</button>

                    <button 
                        onClick={() => { setIsMenuOpen(true) }} 
                        className="w-11 h-11 bg-blue-100 text-2xl text-sky-400 flex items-center justify-center rounded md:hidden z-50">                  
                        { isMenuOpen ?<RiCloseFill/> : <RiMenu4Line /> }
                    </button>
                </div>
            </nav>
        
        </div>
    </>
  )
}

export default Navbar
