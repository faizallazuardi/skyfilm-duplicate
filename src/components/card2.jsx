import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import dumy3 from "../assets/dumy3";

export default function Card2({ api, caption }) {
  return (
    <Container className="card-2">
      {caption ? caption : ""}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {api.map((conten) => {
          return (
            <>
              <SwiperSlide className="p-1" key={conten.id}>
                <a href={conten.url} target="_blank" rel="noreferrer">
                  <img id="card2" src={conten.ss} alt="" />
                </a>
                <p className="mb-0">{conten.judul}</p>
                <p className="mb-0">{conten.eps}</p>
                <p className="mb-0" style={{ color: "#a09f9f" }}>
                  {conten.release}
                </p>
              </SwiperSlide>
              ;
            </>
          );
        })}
      </Swiper>
    </Container>
  );
}
