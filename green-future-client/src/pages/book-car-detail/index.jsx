import { message } from "antd";
import "./style.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import Car from "../../assets/car-type.495bde21.svg";
import People from "../../assets/no_of_seat.b5c472ab.svg";
import Pin from "../../assets/range_per_charge.05d0b2b9.svg";
import Vali from "../../assets/trunk_capacity.2eb533d8.svg";
import CanSo from "../../assets/icon16-detail-transmission.svg";
import Ngoi from "../../assets/icon16-detail-airbag.svg";
import Hot from "../../assets/icon16-detail-max_power.svg";
import Banh from "../../assets/icon16-detail-wheel_drive.svg";
import BookingModal from "../../components/bookingModal";
import { post } from "../../utils/axios-http/axios-http";

const BookCarDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_URL_FE_PUBLIC}/car-models/${id}`
        );
        setData(res.data?.data || []);
      } catch (error) {
        console.error(error);
        message.error("Không lấy được dữ liệu!!");
      }
    };
    fetchData();
  }, []);
  const onSubmit = async (data) => {
    try {
      const res = await post("bookings", data);
      if (res) {
        message.success("Đặt xe thành công!!!");
        navigate("/thue-xe-tu-lai");
      }
    } catch (error) {
      console.error(error);
      message.error("Lỗi khi đặt xe!!!");
    }
  };
  return (
    <div className="gf-container" style={{ color: "black" }}>
      <div className="c-detail-box">
        <div className="c-detail-box__left">
          {data?.imageUrls && data.imageUrls.length > 0 && (
            <div className="car-gallery">
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
                className="main-gallery"
              >
                {data?.imageUrls.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`car-${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                watchSlidesProgress={true}
                className="thumb-gallery"
              >
                {data?.imageUrls.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={`thumb-${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
        <div className="c-detail-box__right">
          <div className="c-detail-box__row">
            <h1 className="c-detail-title">{data?.name}</h1>
            <div className="c-product-price">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
                maximumFractionDigits: 0,
              }).format(data?.basePricePerDay)}
              <span>/ngày</span>
            </div>
            <div className="mt-3">
              <div className="c-hint">Miễn phí sạc tới 31/12/2027</div>
            </div>
          </div>
          <div className="c-detail-box__row">
            <div className="c-utilities-box">
              <div className="mb-2">
                <div className="col-6">
                  <div className="c-utility-item">
                    <div className="c-utility-item__icon">
                      <img src={People} alt="" />
                    </div>
                    <div className="c-utility-item__content">
                      {data?.seatingCapacity} chỗ
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="c-utility-item">
                    <div className="c-utility-item__icon">
                      <img src={Pin} alt="" />
                    </div>
                    <div className="c-utility-item__content">
                      {data?.rangePerCharge} (NEDC)
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="c-utility-item">
                    <div className="c-utility-item__icon">
                      <img src={CanSo} alt="" />
                    </div>
                    <div className="c-utility-item__content">Số tự động</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="c-utility-item">
                    <div className="c-utility-item__icon">
                      <img src={Ngoi} alt="" />
                    </div>
                    <div className="c-utility-item__content">1 túi khí</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="c-utility-item">
                    <div className="c-utility-item__icon">
                      <img src={Hot} alt="" />
                    </div>
                    <div className="c-utility-item__content">
                      {data?.batteryCapacity}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="c-utility-item">
                    <div className="c-utility-item__icon">
                      <img src={Car} alt="" />
                    </div>
                    <div className="c-utility-item__content">
                      {data?.vehicleType}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="c-utility-item">
                    <div className="c-utility-item__icon">
                      <img src={Vali} alt="" />
                    </div>
                    <div className="c-utility-item__content">
                      {data?.trunkCapacity}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="c-utility-item">
                    <div className="c-utility-item__icon">
                      <img src={Banh} alt="" />
                    </div>
                    <div className="c-utility-item__content">
                      Giới hạn di chuyển {data?.maxSpeed}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-detail-box__row">
            <div className="c-detail-book">
              <button className="btn" onClick={() => setModalVisible(true)}>
                Đặt xe
              </button>
              <BookingModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                cars={data}
                onSubmit={onSubmit}
              />
              <p className="text-center">Nhận thông tin tư vấn</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="col-lg-8">
          <div className="c-widget">
            <div className="c-widget__title">
              <h2>Các tiện nghi khác</h2>
            </div>
            <div className="c-widget__content">
              <div className="c-utilities-box">
                <div className="mb-2">
                  <div className="col-6">
                    <div className="c-utility-item">
                      <div className="c-utility-item__icon">
                        <img src={Vali} alt="" />
                      </div>
                      <div className="c-utility-item__content">
                        Trợ lý ảo VinFast trí tuệ nhân tạo
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="c-utility-item">
                      <div className="c-utility-item__icon">
                        <img src={Vali} alt="" />
                      </div>
                      <div className="c-utility-item__content">
                        Hệ thống hỗ trợ người lái ADAS
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="c-utility-item">
                      <div className="c-utility-item__icon">
                        <img src={Vali} alt="" />
                      </div>
                      <div className="c-utility-item__content">
                        Tích hợp HUD (Tuỳ chọn)
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="c-utility-item">
                      <div className="c-utility-item__icon">
                        <img src={Vali} alt="" />
                      </div>
                      <div className="c-utility-item__content">
                        Màn hình giải trí 12,9 inch
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="c-utility-item">
                      <div className="c-utility-item__icon">
                        <img src={Vali} alt="" />
                      </div>
                      <div className="c-utility-item__content">
                        La-zăng 17 inch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-widget">
            <div className="c-widget__title">
              <h2>Điều kiện thuê xe</h2>
            </div>
            <div className="c-widget__content">
              <div className="c-utilities-box">
                <div className="mb-2">
                  <div className="col-12">
                    <div className="c-utility-label">
                      Thông tin cần có khi nhận xe
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="c-utility-item">
                      + CCCD hoặc Hộ chiếu còn thời hạn
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="c-utility-item">
                      + Bằng lái hợp lệ, còn thời hạn
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-utilities-box">
                <div className="mb-2">
                  <div className="col-12">
                    <div className="c-utility-label">Hình thức thanh toán</div>
                  </div>
                  <div className="col-12">
                    <div className="c-utility-item">+ Trả trước</div>
                  </div>
                  <div className="col-12">
                    <div className="c-utility-item">
                      + Thời hạn thanh toán: đặt cọc giữ xe thanh toán 100% khi
                      kí hợp đồng và nhận xe
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-utilities-box">
                <div className="mb-2">
                  <div className="col-12">
                    <div className="c-utility-label">
                      Chính sách đặt cọc (thế chân)
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="c-utility-item">
                      + Khách hàng phải thanh toán số tiền cọc là 10.000.000đ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default BookCarDetail;
