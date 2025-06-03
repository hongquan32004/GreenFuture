import React, { useState} from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
 

  return (
    
    <div className="rental-type-selector">
      <div className="rental-option-group">
        <button
          className={`rental-title ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => {
            setActiveIndex(0);
            navigate("/");
          }}
        >
        
          Thuê ngày
        </button>

        <button
          className={`rental-title ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => {
            setActiveIndex(1);
            navigate("/rental/month");
          }}
        >
          Thuê tháng
         
        </button>

        <button
          className={`rental-title ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => {
            setActiveIndex(2);
            navigate("/rental/year");
          }}
        >
          Thuê năm
          
        </button>
      </div>
      
    </div>
    
  );
};

export default Sidebar;
