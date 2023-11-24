import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import dumy1 from "../assets/dumy1";
import { Link } from "react-router-dom";

export default function Card1({ responsive, api, showLink, ulang, judul, posisi }) {
  // console.log(posisi);
  return (
    <Container className="card-1">
      <h1 className="mt-5 mb-3 p-1">{judul}</h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={ulang ? ulang : false}
        breakpoints={
          responsive
            ? responsive
            : {
                360: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }
        }
        className="mySwiper"
      >
        {api.map((conten) => {
          return (
            <>
              <SwiperSlide className="" key={conten.id}>
                {showLink ? (
                  <Link to={`/detail/${conten.id}`}>
                    <img id="card1" src={conten.poster} alt="" />
                  </Link>
                ) : (
                  <img id="card3" src={conten.poster} alt="" />
                )}
                <div className="d-flex flex-column">
                  <span className={posisi ? posisi : ""} style={{ fontSize: 16 }}>
                    {conten.judul}
                  </span>
                  <span className="text-center" style={{ color: "#828796", fontSize: 16 }}>
                    {conten.peran}
                  </span>
                </div>
              </SwiperSlide>
              ;
            </>
          );
        })}
      </Swiper>
    </Container>
  );
}
