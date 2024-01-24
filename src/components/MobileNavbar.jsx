import logo from "../assets/logo.png"


function MobileNavbar({ isOpen,setIsMenuOpen }) {

  const hadleScroll = (sectionId) => {
    if(isOpen) setIsMenuOpen(false)
    document.getElementById(sectionId).scrollIntoView({ behavior:"smooth"})
  }

  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-slate-200">
        <img src={logo} alt="logo" className="w-16 object-contain mb-8"/>
      
        <ul>
            <li className="mb-5">
                <a className="menu-item" onClick={()=>hadleScroll("inicio")}>Inicio</a>
            </li>
            <li className="mb-5">
                <a className="menu-item" onClick={()=>hadleScroll("servicios")}>Servicios</a>
            </li>
            <li className="mb-5">
                <a className="menu-item" onClick={()=>hadleScroll("trabajos")}>Trabajos</a>
            </li>
            <li className="mb-5">
                <a className="menu-item"onClick={()=>hadleScroll("testimonios")}>Testimonios</a>
            </li>
        </ul>

        <button className="h-10 bg-sky-400 text-sm px-6 rounded hover:bg-sky-600 hover:text-sky-800 mb:block">Contacto</button>

      </div>

      <div 
        onClick={() => { setIsMenuOpen(false) }} 
        className="w-screen h-screen bg-gray-600 bg-opacity-50 fixed top-0 -z-10">

      </div>
    </div>
  )
}

export default MobileNavbar
