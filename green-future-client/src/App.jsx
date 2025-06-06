import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { React, useEffect } from "react";
import "./App.css";
import CarLogin from "./pages/login/login";
import MainLayout from "./components/layout-main";
import Rentalday from "./pages/rental-day";
import Rentalmonth from "./pages/rental-month";
import Rentalyear from "./pages/rental-year";
import Cars from "./pages/book-car/BookCars";
import BookCars from "./pages/book-car/BookCars";
import Home from "./pages/home";
import ImageCarousel from "./pages/ImageCarousel/ImageCarousel";

function App() {
  // const location = useLocation();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   const initialPath = location.pathname;
  //   if (!accessToken && initialPath !== "/") {
  //     navigate("/", { replace: true });
  //   }
  // }, [location.pathname, navigate]);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<CarLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<ImageCarousel />} />
        
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<Rentalday/>} /> */}
          <Route path="/" element={<Rentalday />} />{" "}
          <Route path="/thue-xe-tu-lai" element={<BookCars />}>
            <Route path="theo-thang" element={<Rentalmonth />} />
            <Route path="theo-nam" element={<Rentalyear />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
