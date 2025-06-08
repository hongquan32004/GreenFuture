import React, { useState } from 'react';
import './index.css';

const ChangePassword = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  return (
    <div className="change-password-container">
      <h2 className="change-password-title">Thay đổi mật khẩu</h2>

      <div className="form-group">
        <label>Mật khẩu hiện tại</label>
        <div className="input-wrapper">
          <input
            type={showOld ? "text" : "password"}
            placeholder="Nhập mật khẩu hiện tại"
          />
          <span onClick={() => setShowOld(!showOld)} className="toggle-icon-2">
            👁️‍🗨️
          </span>
        </div>
      </div>

      <div className="form-group">
        <label>Mật khẩu mới</label>
        <div className="input-wrapper">
          <input
            type={showNew ? "text" : "password"}
            placeholder="Nhập mật khẩu mới"
          />
          <span onClick={() => setShowNew(!showNew)} className="toggle-icon-2">
            👁️‍🗨️
          </span>
        </div>
      </div>

      <div className="form-group">
        <label>Nhập lại mật khẩu</label>
        <div className="input-wrapper">
          <input
            type={showRepeat ? "text" : "password"}
            placeholder="Nhập mật khẩu mới"
          />
          <span onClick={() => setShowRepeat(!showRepeat)} className="toggle-icon-2">
            👁️‍🗨️
          </span>
        </div>
      </div>

      <div className="button-wrapper">
        <button className="confirm-button">Xác nhận</button>
      </div>
    </div>
  );
};

export default ChangePassword;
