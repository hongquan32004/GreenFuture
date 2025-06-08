import React, { useState } from "react";
import "./style.css";
import CarList from "../../components/car-list";

const Rentalday = () => {
  const [location, setLocation] = useState("Hà Nội");
  const [pickupDate, setPickupDate] = useState("2025-05-03");
  const [pickupTime, setPickupTime] = useState("19:30");
  const [returnDate, setReturnDate] = useState("2025-05-04");
  const [returnTime, setReturnTime] = useState("19:30");

  const handleDateChange = (e, setter) => {
    setter(e.target.value);
  };
  return (
    <div>
      <div className="search-form">
        <div className="form-section">
          <h4>Tỉnh/Thành phố</h4>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="location-select"
          >
            <option value="Hà Nội">Hà Nội</option>
            <option value="Vinh">Vinh</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
          </select>
        </div>

        <div className="form-section">
          <h4>Ngày nhận xe</h4>
          <div className="datetime-inputs">
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => handleDateChange(e, setPickupDate)}
              className="date-input"
            />
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="time-input"
            />
          </div>
        </div>

        <div className="form-section">
          <h4>Ngày trả xe</h4>
          <div className="datetime-inputs">
            <input
              type="date"
              value={returnDate}
              onChange={(e) => handleDateChange(e, setReturnDate)}
              className="date-input"
            />
            <input
              type="time"
              value={returnTime}
              onChange={(e) => setReturnTime(e.target.value)}
              className="time-input"
            />
          </div>
        </div>

        <button className="search-button">Tìm kiếm xe</button>
      </div>
      <CarList />
    </div>
  );
};

export default Rentalday;
