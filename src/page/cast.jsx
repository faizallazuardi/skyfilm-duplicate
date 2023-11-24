import Navigasi from "../components/navbar";
import { MapContainer, TileLayer, Popup, Circle, LayerGroup, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Cast() {
  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  const center = [-6.2977586, 106.7934992];
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const BtnContact = ({ tulisan, icon, url }) => {
    return (
      <a className="text-decoration-none" href={`${url}`} rel="noreferrer" target={url == "#" ? "" : "_blank"}>
        <Button className="d-flex align-items-center gap-1 p-2 rounded-pill text-primary mb-3" variant="light" style={{ width: 220 }}>
          {icon}
          <span className="text-uppercase" style={{ fontSize: 15 }}>
            {tulisan}
          </span>
        </Button>
      </a>
    );
  };

  return (
    <>
      {isloading ? (
        <div className="cast">
          <Navigasi />
          <Container className="py-5">
            <div className="peta px-3 mb-5">
              <MapContainer center={center} zoom={13}>
                <TileLayer attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LayerGroup>
                  <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
                  <Circle center={center} pathOptions={fillRedOptions} radius={100} stroke={false} />
                </LayerGroup>
                <FeatureGroup>
                  <Popup>
                    <div>
                      <h3>Sky film</h3>
                      <img src="/logo_vidio.png" alt="" style={{ width: 200 }} />
                    </div>
                  </Popup>
                  <Circle center={center} radius={200} />
                </FeatureGroup>
              </MapContainer>
            </div>
            <div className="contentcast">
              <Row className="text-center">
                <Col className="col-lg-4 col-12 mb-4">
                  <img className="logo-cast" src="/skylogo.jpg" alt="" />
                </Col>
                <Col className="col-lg-4 mx-auto col-10 mb-4">
                  <h3 className="p-1 text-center">COME CAST IN PERSON</h3>
                  <p>Jl. Kaimun Jaya No.1, RT.10/RW.4, Cilandak Barat, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430</p>
                </Col>
                <Col className="mx-auto col-lg-4 col-10 mb-4">
                  <h3 className="p-1 text-center">CONTACT US DIRECLY</h3>
                  <div className="d-flex flex-wrap mt-3 p-3 gap-3 justify-content-center">
                    <BtnContact tulisan="Whatsapp us" icon={<img width="30" height="30" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />} url="#" />
                    <BtnContact tulisan="Direct message us" icon={<img width="30" height="30" src="https://img.icons8.com/fluency/70/instagram-new.png" alt="instagram-new" />} url="https://www.instagram.com/skyfilmsofficial/" />
                    <BtnContact tulisan="email us" icon={<img width="30" height="30" src="https://img.icons8.com/color/70/gmail--v1.png" alt="gmail--v1" />} url="mailto:alamatemail@contoh.com" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
