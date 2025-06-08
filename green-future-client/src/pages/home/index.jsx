import "./index.css";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import CarLogin from "../../pages/login/login";
import { message } from "antd";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
const Home = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const handleShowlogin = () => {
    setShowLogin(true);
  };
  const cancelLogin = () => {
    setShowLogin(false);
  };

  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // Di chuyển header chậm hơn 1/2 tốc độ cuộn
      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(${
          window.scrollY * 0.5
        }px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // xử lý login
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    setOpen(false);
    // message.success("Đăng nhập thành công");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    // const initialPath = location.pathname;
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // if (initialPath !== "/home") {
        navigate("/home", { replace: true });
      // }
    }
  }, []); //location.pathname, navigate
  return (
    <div>
      <header className="gf-home" ref={headerRef}>
        {/* ref={headerRef} */}
        <div className="gf-home-container">
          {/* Logo */}
          <div className="gf-logo-home">
            <img src="/logo_gf_text.svg" alt="" />
          </div>

          {/* Navigation */}
          <nav className="gf-nav-home">
            <ul className="gf-nav-menu-home">
              <li
                className="gf-nav-item-home"
                onClick={() => navigate("/cars")}
              >
                Dịch vụ
              </li>
              <li className="gf-nav-item-home">Mua xe cũ chính hãng</li>

              <li className="gf-nav-item-home">Giới thiệu</li>
              <li className="gf-nav-item-home">Tin tức</li>
            </ul>
          </nav>

          {/* User info */}
          <div className="gf-user-info-home">
            {!isLoggedIn ? (
              <button className="gf-login-btn-home" onClick={handleShowlogin}>
                <i className="fa fa-user-circle" aria-hidden="true"></i>
                Đăng nhập
              </button>
            ) : (
              <button className="gf-login-btn-home" onClick={() => setOpen((prev) => !prev)}>
                <i className="fa fa-user-circle" aria-hidden="true"></i>
                Chien Nguyen
              </button>
            )}
          </div>
          {isLoggedIn && open && (
            <div className="gf-user-dropdown-home">
              <div className="gf-user-option-home" onClick={() => navigate("/account")}>
                <i className="fa fa-clipboard"></i> Đơn hàng của tôi
              </div>
              <div className="gf-user-option-home">
                <i className="fa fa-user"></i> Tài khoản
              </div>
              <div className="gf-user-option-home" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i> Đăng xuất
              </div>
            </div>
          )}
        </div>
      </header>
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
      <div className="gf-home-content">
        <div className="gf-home-banner">
          <img src="/images/car-home.png" alt="Green Future Banner" />
        </div>
        <div className="gf-home-description">
          <div className="gf-home-text-overlay">
            <h1 className="gf-home-title">Đáp ứng mọi nhu cầu thuê xe</h1>
            <p className="gf-home-subtitle">
              Cung cấp dịch vụ thuê xe tự lái và có tài xế, phục vụ mọi nhu cầu
              di chuyển của bạn
            </p>
            <div className="gf-home-buttons">
              <button className="gf-btn-primary">Thuê xe có tài</button>
              <a href="#carousel-self-drive">
                <button className="gf-btn-secondary">Thuê xe tự lái</button>
              </a>
            </div>
          </div>
        </div>
        <div className="self-drive-rental" id="carousel-self-drive">
          <div className="self-drive-rental__content">
            <h1 className="self-drive-rental__title">Thuê xe tự lái</h1>
            <p className="self-drive-rental__description">
              Dịch vụ thuê xe tự lái chuyên nghiệp - linh hoạt theo ngày / tháng
              / năm đáp ứng mọi nhu cầu di chuyển cá nhân.
            </p>
            <button
              className="self-drive-rental__cta-button"
              onClick={() => navigate("/thue-xe-tu-lai")}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
        <ImageCarousel />

        <footer className="gf-site-footer">
          <div className="gf-footer-main">
            <div className="gf-footer-about">
              <div className="gf-footer-logo">
                <img src="/logo_gf_text.svg" alt="Green Future Logo" />
              </div>

              <div className="gf-company-details">
                <h3>CÔNG TY CỐ PHẦN THƯƠNG MẠI VÀ DỊCH VỤ GREEN FUTURE</h3>
                <p>
                  MST/MSDN: 01.10/7.12.84 do Số KHĐT TP Hà Nội cấp lần 06 ngày
                  28/02/2025
                </p>
                <p>
                  Địa chỉ: Tòa văn phòng Symphony, Đường Chu Huỳ Môn, Khu đô thị
                  Vinhomes Riverside, Phường Phúc Lý, Quận Long Biên, Thành phố
                  Hà Nội, Việt Nam
                </p>
              </div>
              <div className="gf-footer-logo-btc">
                <img src="/images/logo-bct.png" alt="Green Future Logo" />
              </div>
            </div>

            <div className="gf-footer-booking">
              <h3>Đặt xe</h3>
              <div className="gf-footer-links">
                <p>Ngắn hạn</p>
                <p>Dài hạn</p>
                <p>Doanh nghiệp</p>
              </div>
            </div>

            <div className="gf-footer-info">
              <h3>Giới thiệu</h3>
              <div className="gf-footer-links">
                <p>Về chúng tôi</p>
                <p>Dịch vụ</p>
                <p>Tin tức</p>
              </div>
            </div>

            <div className="gf-footer-contact">
              <h3>Liên hệ</h3>
              <div className="gf-footer-links">
                <p>1900 1877</p>
                <p>0896 229 555</p>
                <p>support@greenfuturetech</p>
              </div>
            </div>
            <div className="gf-social-icons">
              <div className="icons">
                <img src="/icon-facebook.svg" alt="Facebook" />
              </div>
              <div className="icons">
                <img src="/icon-tiktok.svg" alt="TikTok" />
              </div>
              <div className="icons">
                <img src="/icon-insta.svg" alt="Instagram" />
              </div>
              <div className="icons">
                <img src="/icon-youtube.svg" alt="YouTube" />
              </div>
              <div className="icons">
                <img src="/icon-linkedin.svg" alt="LinkedIn" />
              </div>
            </div>
          </div>

          <div className="gf-footer-bottom">
            <div className="gf-copyright">
              <p>© 2025 Green Future corp. All rights reserved.</p>
            </div>
            <div className="gf-terms">
              <p>Điều khoản sử dụng</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
