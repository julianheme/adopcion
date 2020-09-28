import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import Gato1 from "../../../imagenes/Gato1.jpg";
import Perro1 from "../../../imagenes/Perro1.jpg";
import Perro2 from "../../../imagenes/Perro2.jpeg";
import styles from "./bannerP.module.css";

const images = [
	{id:'0', src:Gato1, alt:Gato1},
	{id:'2', src:Perro1, alt:Perro1},
	{id:'3', src:Perro2, alt:Perro2}
]

SwiperCore.use([Pagination, Autoplay]);
export default function BannerP() {
	return (
		<Swiper spaceBetween={0} slidesPerView={1} loop="true" pagination={{ clickable: true }} autoplay={{ delay: 4000 }}>
		{images.map((i) => {
				return (
					<SwiperSlide key={i.id}>
						<img className={styles.imagen} src={i.src} alt={i.alt}/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
