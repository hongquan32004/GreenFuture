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
import BookCarDetail from "./pages/book-car-detail";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<CarLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<ImageCarousel />} />
        <Route element={<MainLayout />}>
          <Route path="/thue-xe-tu-lai" element={<BookCars />}>
            <Route index element={<Rentalday />} />
            <Route path="theo-thang" element={<Rentalmonth />} />
            <Route path="theo-nam" element={<Rentalyear />} />
          </Route>
          <Route path="/thue-xe/:id" element={<BookCarDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
