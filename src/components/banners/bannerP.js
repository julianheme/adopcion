import React, { PureComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import Gato1 from "../../imagenes/Gato1.jpg";
import Gato2 from "../../imagenes/Gato2.jpg";
import Perro1 from "../../imagenes/Perro1.jpg";
import Perro2 from "../../imagenes/Perro2.jpeg";

SwiperCore.use([Pagination, Autoplay]);
class BannerP extends PureComponent {
	render() {
		const I = {
			imagen: {
				width: "100%",
				height: "100vh",
			},
		};
		return (
			<div>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					loop="true"
					pagination={{ clickable: true }}
					autoplay={{ delay: 4000 }}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<img style={I.imagen} src={Gato1} />
					</SwiperSlide>
					<SwiperSlide>
						<img style={I.imagen} src={Gato2} />
					</SwiperSlide>
					<SwiperSlide>
						<img style={I.imagen} src={Perro1} />
					</SwiperSlide>
					<SwiperSlide>
						<img style={I.imagen} src={Perro2} />
					</SwiperSlide>
				</Swiper>
			</div>
		);
	}
}

export default BannerP;
