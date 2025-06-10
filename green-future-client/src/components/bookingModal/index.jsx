import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Button,
} from "antd";
import dayjs from "dayjs";
import { data } from "react-router-dom";

const { RangePicker } = DatePicker;

const BookingModal = ({ visible, onClose, onSubmit, cars }) => {
  const [form] = Form.useForm();
  const id = localStorage.getItem("userId");

  const handleOk = () => {
    form.validateFields().then((values) => {
      const [startDate, endDate] = values.dateRange;
      const data = {
        userId: values.userId,
        carId: values.carId,
        pickupLocationId: values.pickupLocationId,
        startDateTime: startDate.toISOString(),
        endDateTime: endDate.toISOString(),
        rentalType: values.rentalType,
        basePrice: values.basePrice,
        insuranceOptionId: values.insuranceOptionId,
        promotionCode: values.promotionCode,
        specialRequest: values.specialRequest,
      };
      onSubmit(data);
      onClose();
    });
  };

  return (
    <Modal
      title="Đặt xe"
      visible={visible}
      onCancel={onClose}
      onOk={handleOk}
      okText="Xác nhận"
      cancelText="Hủy"
      style={{ marginTop: "-70px" }}
    >
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          rentalType: "daily",
          userId: id,
          carId: cars?.id,
          basePrice: cars?.basePricePerDay,
          promotionCode: "VFWELCOME",
        }}
      >
        <Form.Item label="User ID" name="userId" rules={[{ required: true }]}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Car ID" name="carId" rules={[{ required: true }]}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Pickup Location ID"
          name="pickupLocationId"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Thời gian thuê"
          name="dateRange"
          rules={[{ required: true }]}
        >
          <RangePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Loại thuê"
          name="rentalType"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="daily">Theo ngày</Select.Option>
            <Select.Option value="hourly">Theo giờ</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Giá cơ bản (VND)"
          name="basePrice"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: "100%" }} min={0} />
        </Form.Item>

        <Form.Item
          label="Insurance Option ID"
          name="insuranceOptionId"
          rules={[{ required: true }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Mã khuyến mãi" name="promotionCode">
          <Input />
        </Form.Item>

        <Form.Item label="Yêu cầu đặc biệt" name="specialRequest">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BookingModal;
