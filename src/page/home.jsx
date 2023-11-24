import dumy3 from "../assets/dumy3";
import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Hero from "../components/carousel";
import Navigasi from "../components/navbar";
import Caption from "../components/caption";
import Footer from "../components/footer";
import dumy1 from "../assets/dumy1";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <>
      {isloading ? (
        <div className="homepage">
          <Navigasi />
          <Hero />
          <Card1 api={dumy1} ulang={true} showLink={true} judul="Seriess Collection" />
          <Card2 api={dumy3} caption={<Caption />} />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
