import h1 from "../assets/Home1.png" 
import h2 from "../assets/Home2.png" 
import h3 from "../assets/Home3.png" 

function Home() {
  return (
    <div id="inicio" className='max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row '>
        <div className='flex-1 text-center md:text-left'>
            <h2 className='text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]'>
                Revelando la belleza interior,  construyendo autoestima.
            </h2>

            <p className='text-lg leading-6 text-cyan-400/70 mb-6 md:w-4/5'>        
                Resaltando la belleza, convirtiendo los momentos en experiencias. 
                Explore nuestra excepcional artesanía e imagine su belleza perfecta.
            </p>

        </div>

        <div className='flex gap-2 justify-center md:gap-3 lg:gap-3'>
            <img className='img-home ' src={h1} alt="Imagen 1"/>
            <img className='img-home mt-[3%]' src={h2} alt="Imagen 2"/>
            <img className='img-home mt-[5%]' src={h3} alt="Imagen 3"/>
        </div>
    </div>
  )
}

export default Home
