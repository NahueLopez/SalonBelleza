//ESTADISTICA_DATA
import experiencia from "../assets/experiencia.png"
import profesionalismo from "../assets/profesionalismo.png"
import calidad from "../assets/calidad.png"
import confianza from "../assets/confianza.png"
//Servicios
import peluqueria from "../assets/peluqueriaServicios.jpg"
import tinte from "../assets/tinteServicios.jpg"
import manicura from "../assets/manicuraServicio.jpg"
import facial from "../assets/facialServicios.jpg"
import corporal from "../assets/corporalServicio.jpg"
import masajes from "../assets/masajesServicios.jpg"
//Testimonios
import t1 from "../assets/t1.png"
import t2 from "../assets/t2.png"
import t3 from "../assets/t3.png"
import t4 from "../assets/t4.png"
import t5 from "../assets/t5.png"
import t6 from "../assets/t6.png"

export const ESTADISTICA_DATA = [
    { iconUrl: experiencia, titulo: "EXPERIENCIA", texto: "Contamos con expertos altamente cualificados y más de 30 años de trayectoria en el ámbito de la belleza." },
    { iconUrl: profesionalismo, titulo: "PROFESIONALISMO", texto: "Reconocidos por nuestro compromiso con la excelencia, nuestro equipo altamente calificado aporta décadas de experiencia y dedicación en el campo de la belleza." },
    { iconUrl: calidad, titulo: "CALIDAD", texto:"Dedicados a la excelencia, nuestra casa de belleza ofrece calidad respaldada por décadas de experiencia y atención meticulosa a cada detalle." },
    { iconUrl: confianza, titulo: "CONFIANZA", texto: "Tu confianza es nuestra prioridad. Con décadas de experiencia y un equipo comprometido, en nuestra casa de belleza, puedes confiar plenamente en la calidad y atención excepcionales que ofrecemos." },
]

export const SERVICIOS = [
    {imgUrl: peluqueria, titulo: "Corte de Cabello", descripcion:"En nuestro acogedor salón de peluquería, nos dedicamos a realzar tu belleza y resaltar tu estilo único. Con un equipo de estilistas apasionados y altamente capacitados, ofrecemos servicios de corte de cabello, coloración, tratamientos capilares y peinados para mujeres, hombres y niños. En un ambiente relajado y moderno, nos esforzamos por proporcionar una experiencia personalizada, asegurando que cada visita sea una oportunidad para revitalizar tu imagen y elevar tu confianza. Ven a disfrutar de la atención experta que te mereces en nuestro oasis de belleza y bienestar."},
    {imgUrl: tinte, titulo: "Coloración y Tintes", descripcion:"Descubre la magia de la transformación en nuestro salón especializado en coloración y tintes. Nuestro talentoso equipo de estilistas utiliza las últimas tendencias y técnicas innovadoras para crear colores vibrantes, reflejos cautivadores y efectos degradados. Ya sea que desees un cambio sutil o una transformación audaz, estamos comprometidos a realzar tu belleza única. Sumérgete en una experiencia de coloración personalizada que resalta tu estilo y refleja tu personalidad, todo en un ambiente acogedor y moderno donde la creatividad y la atención experta se unen para lograr resultados sorprendentes."},
    {imgUrl: manicura, titulo: "Manicura y Pedicura", descripcion:"Embárcate en un viaje de cuidado y elegancia en nuestro oasis dedicado a la manicura y pedicura. Experimenta la indulgencia y el cuidado experto de manos y pies mientras nuestro talentoso equipo de especialistas trabaja su magia. Desde manicuras clásicas hasta pedicuras relajantes, te ofrecemos un escape de bienestar donde la atención meticulosa a los detalles se combina con productos de alta calidad. Sumérgete en un ambiente tranquilo y moderno, donde tus manos y pies son mimados y transformados, dejándote con una sensación de frescura y elegancia."},
    {imgUrl: facial, titulo: "Tratamientos Faciales", descripcion:"Sumérgete en la indulgencia de nuestros tratamientos faciales, diseñados para renovar y rejuvenecer tu piel. Experimenta la exquisitez de limpiezas profundas, mascarillas revitalizantes y terapias específicas adaptadas a las necesidades únicas de tu cutis. En nuestro santuario de belleza, cada tratamiento facial es una experiencia personalizada, guiada por expertos que se esfuerzan por realzar tu luminosidad natural y mejorar la salud de tu piel"},
    {imgUrl: corporal, titulo: "Tratamientos Corporales", descripcion:"Embárcate en un viaje revitalizante con nuestros tratamientos corporales que nutren y renuevan todo tu ser. Desde exfoliaciones que revelan una piel suave y radiante hasta envolturas que hidratan y tonifican, nuestros servicios corporales están diseñados para proporcionar una experiencia sensorial completa. En un ambiente de relajación, nuestros especialistas trabajan para restaurar el equilibrio y dejar que te sumerjas en una sensación renovada de bienestar."},
    {imgUrl: masajes, titulo: "Masajes", descripcion:"Descubre la serenidad a través de nuestras terapias de masajes diseñadas para aliviar tensiones y restaurar la armonía en mente y cuerpo. Nuestros masajes terapéuticos son una escapada de relajación, ofreciendo alivio para los músculos tensos y un espacio para liberar el estrés acumulado. Experimenta el toque experto de nuestros masajistas en un ambiente tranquilo, donde cada sesión está diseñada para llevarte a un estado de serenidad y rejuvenecimiento."},
]


export const TESTIMONIOS = [
    {id:"t1", imgUrl:t1 ,nombre:"Juan García", titulo:"Transformación Increíble",mensaje:"El salón de belleza me brindó una experiencia única. Gracias a sus expertos estilistas, mi apariencia nunca había lucido tan fantástica. Cada visita es un viaje de confianza renovada y un cambio de imagen que siempre supera mis expectativas."},
    {id:"t2", imgUrl:t2 ,nombre:"Ana Rodríguez", titulo:"Estilo sin Esfuerzo",mensaje:"Desde cortes de cabello elegantes hasta tratamientos rejuvenecedores, el salón siempre supera mis expectativas. La atención personalizada y el ambiente relajado hacen que cada visita sea especial. ¡Mi lugar para el mejor cuidado capilar!"},
    {id:"t3", imgUrl:t3 ,nombre:"Roberto Hernández", titulo:"Sensación de Frescura",mensaje:"Cada servicio en el salón es una experiencia de bienestar total. Desde los tratamientos faciales hasta los masajes, siempre me voy sintiéndome rejuvenecido. Es un lugar donde la calidad se encuentra con la atención experta."},
    {id:"t4", imgUrl:t4 ,nombre:"Carolina López", titulo:"Brillo y Estilo",mensaje:"El salón de belleza es mi refugio para mantener mi cabello siempre radiante. Sus servicios de coloración son excepcionales y el personal es increíblemente talentoso. Siempre salgo sintiéndome hermosa y renovada."},
    {id:"t5", imgUrl:t5 ,nombre:"Alejandro Martínez", titulo:"Manicura de Ensueño",mensaje:"¡El mejor lugar para mimar mis manos y pies! Las manicuras y pedicuras son impecables, y el ambiente relajante hace que cada sesión sea un placer. No hay duda de que este salón es mi elección para el cuidado de uñas."},
    {id:"t6", imgUrl:t6 ,nombre:"María Torres", titulo:"Experiencia de Spa Única",mensaje:"Los tratamientos faciales y corporales en el salón son un regalo para mi piel. Cada visita es una experiencia de spa que rejuvenece mi cuerpo y alma. Gracias al equipo por su profesionalismo y atención excepcional."},
]