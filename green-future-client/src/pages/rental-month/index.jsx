import React, { useState } from "react";
import "./style.css";
import CarList from "../../components/car-list";

const Rentalmonth = () => {
  const [location, setLocation] = useState("Hà Nội");
  const [pickupDate, setPickupDate] = useState("2025-05-03");
  const [pickupTime, setPickupTime] = useState("19:30");
  const [monthCount, setMonthCount] = useState(1);


  const handleDateChange = (e, setter) => {
    setter(e.target.value);
  };
  return (
    <div>
      <div className="search-form-m">
        <div className="form-section-m">
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
              className="date-input-m"
            />
            <input
              type="time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="time-input-m"
            />
          </div>
        </div>

        <div className="form-description">
          <h4>Số tháng</h4>
          <input
            type="number"
            min="1"
            value={monthCount}
            onChange={(e) => setMonthCount(e.target.value)}
            className="number-input"
          />
        </div>

        <button className="search-button">Tìm kiếm xe</button>
      </div>
      <CarList />
    </div>
  );
};

export default Rentalmonth;
