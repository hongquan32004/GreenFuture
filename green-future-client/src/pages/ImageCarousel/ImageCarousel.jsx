import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ImageCarousel.css"; // file CSS riêng

const cars = [
  {
    image: "/images/car1.png",
  },
  {
    image: "/images/car2.png",
  },
  {
    image: "/images/car3.png",
  },
  {
    image: "/images/car4.png",
  },
  {
    image: "/images/car5.png",
  },
  
];

export default function CarCarousel() {
  const navigate = useNavigate();
  return (
    <div className="carousel-container" id="carousel">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={0}
        loop={true}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="mySwiper"
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index} className="car-slide">
            <img
              src={car.image}
              alt={car.name}
              onClick={() => navigate("/thue-xe-tu-lai")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
