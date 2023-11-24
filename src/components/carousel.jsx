import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { GoLinkExternal } from "react-icons/go";

export default function Hero() {
  const isSmallScreen = window.innerWidth <= 576;

  const ExampleCarouselImage = ({ imagePath }) => {
    return <img className="d-block w-100" src={imagePath} alt="Slide" />;
  };

  const KontenHero = () => {
    return (
      <div className={`konten-hero ${!isSmallScreen ? "position-absolute" : "position-static"}`}>
        <p className="text-center mb-2">The latest video is here</p>
        <Button className="btn-hero rounded-pill text-primary" variant="light">
          <GoLinkExternal /> WATCH NOW ON <img src="logo_vidio.png" alt="" />
        </Button>
      </div>
    );
  };

  return (
    <div className="">
      <Carousel className="hero-wrap position-relative">
        <Carousel.Item>
          <ExampleCarouselImage imagePath={!isSmallScreen ? "1.jpg" : "1mobile.jpg"} />
          <KontenHero />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imagePath={!isSmallScreen ? "2.jpg" : "2mobile.jpg"} />
          <KontenHero />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imagePath={!isSmallScreen ? "3.jpg" : "3mobile.jpg"} />
          <KontenHero />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imagePath={!isSmallScreen ? "4.jpg" : "4mobile.jpg"} />
          <KontenHero />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
