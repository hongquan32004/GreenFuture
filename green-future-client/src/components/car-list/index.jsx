import { message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import Car from "../../assets/car-type.495bde21.svg";
import People from "../../assets/no_of_seat.b5c472ab.svg";
import Pin from "../../assets/range_per_charge.05d0b2b9.svg";
import Vali from "../../assets/trunk_capacity.2eb533d8.svg";
import { useNavigate } from "react-router-dom";

const CarList = () => {
  const [carModel, setModel] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_URL_FE_PUBLIC}/car-models`
        );
        setModel(res.data?.data || []);
      } catch (error) {
        console.error(error);
        message.error("Không lấy được dữ liệu!!!");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="car-list" style={{ color: "black" }}>
      {carModel.slice(0, 9).map((item, index) => (
        <div
          className="car-item"
          key={index}
          onClick={() => navigate(`/thue-xe/${item?.id}`)}
        >
          <div className="car-image">
            <div className="absolute">
              <div className="gap-1">
                <div className="c-hint">Miễn phí sạc</div>
                <div className="text-cs">Hết xe</div>
              </div>
            </div>
            <img src={item?.imageUrls?.[0]} alt="" />
          </div>
          <div className="car-info">
            <div className="bg-white">
              <div className="item-center">
                <div className="font-normal">Chỉ từ</div>
                <div className="font-black">{item?.basePricePerDay}</div>
                <div className="font-semibold">VNĐ/ngày</div>
              </div>
            </div>
            <div className="info-detail">
              <div className="font-extrabold">{item?.name}</div>
              <div className="gap-y-3">
                <div className="item-center">
                  <img src={Car} alt="" />
                  <div className="text-sm">{item?.vehicleType}</div>
                </div>
                <div className="item-center">
                  <img src={Pin} alt="" />
                  <div className="text-sm">{item?.rangePerCharge} (NEDC)</div>
                </div>
                <hr className="col-span-2" />
                <div className="item-center">
                  <img src={People} alt="" />
                  <div className="text-sm">{item?.seatingCapacity} chỗ</div>
                </div>
                <div className="item-center">
                  <img src={Vali} alt="" />
                  <div className="text-sm">
                    Dung tích cốp {item?.trunkCapacity}
                  </div>
                </div>
                <hr className="col-span-2" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
