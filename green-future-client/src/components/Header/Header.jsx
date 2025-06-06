import React, { useState } from "react";
import "./Header.css";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CarLogin from "../../pages/login/login";
const Header = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const handleShowlogin = () => {
    setShowLogin(true);
  };
  const cancelLogin = () => {
    setShowLogin(false);
  };
  return (
    <header className="gf-header">
      <div className="gf-header-container">
        {/* Logo */}
        <div className="gf-logo">
          <img src="/images/logo-greenfuture.png" alt="" />
        </div>

        {/* Navigation */}
        <nav className="gf-nav">
          <ul className="gf-nav-menu">
            <li
              className="gf-nav-item active"
              onClick={() => navigate("/thue-xe-tu-lai")}
            >
              Đặt xe
            </li>
            <li className="gf-nav-item">Mua xe cũ chính hãng</li>

            <li className="gf-nav-item new-item">Thuê xe sân bay</li>
            <li className="gf-nav-item">Giới thiệu</li>
            <li className="gf-nav-item">Tin tức</li>
          </ul>
        </nav>

        {/* User info */}
        <div className="gf-user-info">
          <button onClick={handleShowlogin} className="gf-login-btn">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            Đăng nhập
          </button> 
        </div>
      </div>
      {showLogin && (
        <div className="overlay" onClick={cancelLogin}>
          <motion.div
            className="note-container"
            onClick={(e) => e.stopPropagation()}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <CarLogin oncancel={cancelLogin} />
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
