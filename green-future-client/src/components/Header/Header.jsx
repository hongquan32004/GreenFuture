import React, { useState, useEffect } from "react";
import "./Header.css";
import { message } from "antd";
import "font-awesome/css/font-awesome.min.css";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CarLogin from "../../pages/login/login";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowlogin = () => {
    setShowLogin(true);
  };

  const cancelLogin = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setOpen(false);
    message.success("Đăng xuất tài khoản thành công");
    navigate("/", { replace: true });
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    // message.success("Đăng nhập thành công");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const initialPath = location.pathname;
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      if (initialPath !== "/") {
        navigate("/", { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <header className="gf-header">
      <div className="gf-header-container">
        {/* Logo */}
        <div className="gf-logo" onClick={() => navigate("/home")}>
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
          {!isLoggedIn ? (
            <button onClick={handleShowlogin} className="gf-login-btn">
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              Đăng nhập
            </button>
          ) : (
            <button className="gf-login-btn" onClick={() => setOpen(!open)}>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              Chien Nguyen
            </button>
          )}

          {isLoggedIn && open && (
            <div className="gf-user-dropdown">
              <div className="gf-user-option">
                <i className="fa fa-clipboard"></i> Đơn hàng của tôi
              </div>
              <div className="gf-user-option">
                <i className="fa fa-user"></i> Tài khoản
              </div>
              <div className="gf-user-option" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i> Đăng xuất
              </div>
            </div>
          )}
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
            <CarLogin oncancel={cancelLogin} onLoginSuccess={handleLoginSuccess} />
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;