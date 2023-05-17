// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Importanto Componentes do Swiper
import { Pagination, Navigation} from "swiper";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img  src="https://i.pinimg.com/originals/91/d8/9e/91d89ea00a3f2e9a3d326152da4a2548.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images6.alphacoders.com/110/1103747.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://www.eldiariodecarlospaz.com.ar/u/fotografias/fotosnoticias/2020/9/6/137680.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel