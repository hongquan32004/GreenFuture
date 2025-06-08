import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const BookCars = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <div className="rental-type-selector">
        <div className="rental-option-group">
          <button
            className={`rental-title ${
              pathname === "/thue-xe-tu-lai" ? "active" : ""
            }`}
            onClick={() => {
              navigate("/thue-xe-tu-lai");
            }}
          >
            Thuê ngày
          </button>

          <button
            className={`rental-title ${
              pathname === "/thue-xe-tu-lai/theo-thang" ? "active" : ""
            }`}
            onClick={() => {
              navigate("/thue-xe-tu-lai/theo-thang");
            }}
          >
            Thuê tháng
          </button>

          <button
            className={`rental-title ${
              pathname === "/thue-xe-tu-lai/theo-nam" ? "active" : ""
            }`}
            onClick={() => {
              navigate("/thue-xe-tu-lai/theo-nam");
            }}
          >
            Thuê năm
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default BookCars;
