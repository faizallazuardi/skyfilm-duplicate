import dumy1 from "../assets/dumy1";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navigasi from "../components/navbar";
import DataNull from "../components/datanull";

export default function HasilCari() {
  const { search } = useParams();
  const searchResults = dumy1.filter((data) => data.judul.toLowerCase().includes(search.toLowerCase()));

  //   console.log(searchResults);
  return (
    <div className="seriesfilm">
      <Navigasi />
      <div className="series">
        <Container className="py-5">
          {searchResults.length > 0 ? (
            <>
              <h4>Hasil pencarian {`"${search}"`}</h4>
              <div className="d-flex pt-3 flex-wrap justify-content-lg-start gap-lg-4 gap-0 justify-content-evenly">
                {searchResults.map((data) => (
                  <Link className="text-decoration-none text-white" to={`/detail/${data.id}`} key={data.id}>
                    <img src={data.poster} alt="" />
                    <p>{data.judul}</p>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <DataNull basabasi={`Hasil pencarian "${search}"`} />
          )}
        </Container>
        <Footer />
      </div>
    </div>
  );
}
