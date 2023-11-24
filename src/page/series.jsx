import Navigasi from "../components/navbar";
import dumy1 from "../assets/dumy1";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Series() {
  useEffect(() => {
    // console.log(window.location.pathname);
  }, []);

  function SeriesCard() {
    return (
      <div className="series">
        <Container className="d-flex flex-wrap py-5 justify-content-lg-start gap-lg-4 gap-0 justify-content-evenly">
          {dumy1.map((data) => (
            <Link className="text-decoration-none text-white" to={`/detail/${data.id}`} key={data.id}>
              <img src={data.poster} alt="" />
              <p>{data.judul}</p>
            </Link>
          ))}
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="seriesfilm">
      <Navigasi />
      <SeriesCard />
    </div>
  );
}
