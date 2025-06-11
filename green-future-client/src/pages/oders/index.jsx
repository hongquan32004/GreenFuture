import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { get } from "../../utils/axios-http/axios-http";
import { message, Table, Spin, Tag } from "antd";
import axios from "axios";
import dayjs from "dayjs";

const Oders = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("accessToken");
        const userId = localStorage.getItem("userId");
        if (!userId) {
          message.error("Không tìm thấy thông tin người dùng!");
          setLoading(false);
          return;
        }
        console.log("TOKEN:", token);
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL_FE}/bookings/my-bookings/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response?.data?.data?.items || []);
      } catch (err) {
        console.error(err);
        message.error("Không lấy được dữ liệu!!!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const columns = [
    {
      title: "Đơn hàng",
      dataIndex: "orderCode",
      key: "orderCode",
    },
    {
      title: "Dòng xe",
      dataIndex: ["car", "modelName"], // lấy từ car.modelName
      key: "modelName",
      render: (_, record) => record.car?.modelName || "",
    },
    {
      title: "Thời gian nhận xe",
      dataIndex: "startDatetime",
      key: "startDatetime",
      render: (value) => (value ? dayjs(value).format("DD/MM/YYYY HH:mm") : ""),
    },
    {
      title: "Thời gian trả xe",
      dataIndex: "endDatetime",
      key: "endDatetime",
      render: (value) => (value ? dayjs(value).format("DD/MM/YYYY HH:mm") : ""),
    },
    {
      title: "Địa chỉ nhận xe",
      dataIndex: ["pickupLocation", "name"], // lấy từ pickupLocation.name
      key: "pickupLocationName",
      render: (_, record) => record.pickupLocation?.name || "",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "default";
        if (status === "completed") color = "green";
        else if (status === "pending") color = "orange";
        else if (status === "cancelled") color = " red";
        else if (status === "active") color = "purple";
        return <Tag color={color}>{status?.toUpperCase()}</Tag>;
      },
    },
  ];
  return (
    <div className="orders-container">
      <h2 className="orders-title">Lịch sử đơn hàng</h2>
      <div className="orders-filter">
        <div className="filter-group">
          <i className="fa fa-filter"></i>
          <span>Bộ lọc tìm kiếm</span>
        </div>
        <div className="filter-fields">
          <div className="filter-item-id">
            <input type="text" placeholder="Mã đơn hàng" />
            <i className="fa fa-search"></i>
          </div>
          <div className="filter-item">
            <select>
              <option>Tất cả</option>
              <option>VinFast VF 3</option>
              <option>VinFast VF 6 Plus</option>
              <option>VinFast VF 6S</option>
              <option>VinFast VF 7 Plus</option>
              <option>VinFast VF 7S</option>
              <option>VinFast VF 8 Eco</option>
              <option>VinFast VF 8 Plus</option>
              <option>VinFast VF 9 Eco</option>
              <option>VinFast VF 9 Plus</option>
            </select>
          </div>
          <div className="filter-item">
            <select>
              <option>Tất cả</option>
              <option>Chờ xử lý</option>
              <option>Chờ đặt cọc</option>
              <option>Xác nhận</option>
              <option>Đang sử dụng</option>
              <option>Đã trả xe</option>
              <option>Quá hạn</option>
              <option>Hoàn thành</option>
              <option>Đã huỷ</option>
            </select>
          </div>
          <div className="filter-item-date">
            <input type="text" placeholder="Chọn ngày nhận-ngày trả" />
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div className="orders-table">
        <Spin spinning={loading}>
          <Table
            dataSource={data.map((item) => ({ ...item, key: item.id }))}
            columns={columns}
            pagination={{ pageSize: 5 }}
            style={{
              width: "100%",
            }}
            locale={{
              emptyText: "Không có đơn hàng nào",
            }}
          />
        </Spin>
      </div>
      {/* <div className="orders-pagination">
        <button disabled>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button disabled>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div> */}
    </div>
  );
};

export default Oders;
