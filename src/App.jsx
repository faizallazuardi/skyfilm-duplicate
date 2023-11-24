import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import Series from "./page/series";
import Card1Detail from "./components/card1detail";
import Cast from "./page/cast";
import Story from "./page/story";
import HasilCari from "./page/hasilcari";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detail/:id" element={<Card1Detail />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/story" element={<Story />} />
        <Route path="/hasil/:search" element={<HasilCari />} />
      </Routes>
    </>
  );
}

export default App;
