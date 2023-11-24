import { Col, Container, Row } from "react-bootstrap";
import Navigasi from "./navbar";
import dumy2 from "../assets/dumy2";
import Button from "react-bootstrap/Button";
import { GoLinkExternal } from "react-icons/go";
import ReactPlayer from "react-player";
import Card2 from "./card2";
import dumy3 from "../assets/dumy3";
import dumy4 from "../assets/dumy4";
import dumy5 from "../assets/dumy5";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card1 from "./card1";
import Footer from "./footer";
import Loading from "../page/loading";
import DataNull from "./datanull";

export default function Card1Detail() {
  const { id } = useParams();
  const [bahasa, setBahasa] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const selectedData = dumy2.find((item) => item.id === parseInt(id));
  // console.log(selectedData);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 300);
  }, []);

  if (!selectedData) {
    return (
      <div className="null-cover">
        <Navigasi />
        <DataNull />
        <Footer />
      </div>
    );
  }

  let propToSend = null;
  if (id == 1) {
    propToSend = dumy3;
  } else if (id == 2) {
    propToSend = dumy4;
  } else if (id == 3) {
    propToSend = dumy5;
  } else {
    propToSend = null;
  }

  // Tentukan prop yang akan dikirim berdasarkan id
  // switch (parseInt(id)) {
  //   case id == 1:
  //     propToSend = dumy3;
  //     break;
  //   case id == 2:
  //     propToSend = dumy4;
  //     break;
  //   // Tambahkan case lain untuk id lain jika diperlukan
  //   default:
  //     // Case default
  //     propToSend = null;
  //     break;
  // }

  const breakpoints = {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  };

  return (
    <>
      {isloading ? (
        <div className="Card1-detail" style={{ backgroundColor: "#36477f", overflowX: "hidden" }}>
          <Navigasi bahasa={bahasa} setBahasa={setBahasa} />
          <Container>
            <div className="text-center mt-5 mb-4">
              <img className="w-50" src={selectedData.poster} alt="" />
            </div>
            <div className="d-flex mx-auto mb-5 short-sinop" style={{ width: 500, height: 160 }}>
              <p className="text-center text-white">{!bahasa ? selectedData.shortsinopsis : selectedData.shortsinopsisenglish}</p>
            </div>
            <div className="d-flex flex-lg-nowrap flex-wrap text-white justify-content-evenly">
              <div className="mb-lg-0 mb-2">
                <p className="fs-4 mb-lg-1 mb-0">Produced By</p>
                <p>{selectedData.produced}</p>
              </div>
              <div className="mb-lg-0 mb-2">
                <p className="fs-4 mb-lg-1 mb-0">Directed By</p>
                <p>{selectedData.directed}</p>
              </div>
              <div>
                <p className="fs-4 mb-lg-1 mb-0 text-capitalize">director of photography</p>
                <p>{selectedData.director}</p>
              </div>
            </div>
            <div className="banner">
              <Row className="p-3 rounded mt-3" style={{ backgroundColor: "#4e5d8e" }}>
                <Col className="col-lg-9 col-md-7 col-12 d-flex align-items-center text-white">
                  <img src="/logo_vidio.png" className="" style={{ width: 90 }} alt="" />
                  <p className="pt-4 fs-5 lh-1 ms-lg-4 ms-3">
                    All episodes of <i>{selectedData.judul}</i> are on vidio.com
                  </p>
                </Col>
                <Col className="col-lg-3 col-md-5 col-12 mt-lg-0 mt-md-0 mt-4 d-flex justify-content-lg-end justify-content-center">
                  <div className="m-auto">
                    <Button className="rounded-pill text-primary" variant="light">
                      <GoLinkExternal /> WATCH NOW ON <img src="/logo_vidio.png" alt="" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="content my-5 text-white">
              <Row>
                <Col className="col-lg-6 col-12 mb-lg-0 mb-4">
                  <p className="fs-3">OFFICIAL TRAILER</p>
                  <ReactPlayer url={selectedData.trailer} controls={true} width="100%" />
                </Col>
                <Col className="col-lg-6 col-12">
                  <p className="fs-3 mb-lg-1 mb-0 text-uppercase">Synopsis</p>
                  <p style={{ textAlign: "justify" }}>{!bahasa ? selectedData.longsinopsis : selectedData.longsinopsisenglish}</p>
                </Col>
              </Row>
            </div>
            <div className="Episodes text-white">
              <p className="fs-3 text-uppercase">Episodes</p>
              <Card2 api={propToSend} />
              <Card1 responsive={breakpoints} api={selectedData.actor} judul="MEET THE CAST" showLink={false} posisi={"text-center"} />
            </div>
            <Footer />
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
