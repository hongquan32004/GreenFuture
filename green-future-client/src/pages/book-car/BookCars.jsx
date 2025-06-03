import { Outlet } from "react-router-dom";
import "./BookCars.css";
import CarLogin from "../login/login";
import { useState } from "react";

const BookCars = () => {
  return (
    <div>
      <h1>Trang chủ GreenFuture</h1>
      <Outlet />
    </div>
  );
};

export default BookCars;
