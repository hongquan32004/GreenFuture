import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { React, useEffect } from "react";
import "./App.css";
import CarLogin from "./pages/login/login";
import MainLayout from "./components/layout-main";
import Rentalday from "./pages/rental-day";
import Rentalmonth from "./pages/rental-month";
import Rentalyear from "./pages/rental-year";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const initialPath = location.pathname;
    if (!accessToken && initialPath !== "/login") {
      navigate("/login", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<CarLogin />} />

        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<Rentalday/>} /> */}
          <Route path="/" element={<Rentalday />} />
          <Route path="/rental/month" element={<Rentalmonth />} />
          <Route path="/rental/year" element={<Rentalyear />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
