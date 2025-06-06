import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-light">
          <div className="footer-header">
            <img src="/logo_gf_black.svg" alt="Green Future Logo" />
          </div>

          <div className="company-info">
            <p>CÔNG TY CỐ PHẦN THƯƠNG MẠI VÀ DỊCH VỤ GREEN FUTURE</p>
            <p>
              MST/MSDN: 01.10/7.12.84 do Số KHĐT TP Hà Nội cấp lần 06 ngày
              28/02/2025
            </p>

            <p>
              Địa chỉ: Tòa văn phòng Symphony, Đường Chu Huỳ Môn, Khu đô thị
              Vinhomes Riverside, Phường Phúc Lý, Quận Long Biên, Thành phố Hà
              Nội, Việt Nam
            </p>
          </div>
          <div className="gf-logo-btc">
            <img src="/images/logo-bct.png" alt="Green Future Logo" />
          </div>
        </div>

        {/* Services Sections */}
        <div className="footer-wen">
          <div className="footer-wen1">
            <h3>Đặt xe</h3>
            <div className="services-column">
              <p>Ngắn hạn</p>
              <p>Dài hạn</p>
              <p>Doanh nghiệp</p>
            </div>
          </div>

          <div className="footer-wen2">
            <h3>Giới thiệu</h3>
            <div className="services-column">
              <p>Về chúng tôi</p>
              <p>Dịch vụ</p>
              <p>Tin tức</p>
            </div>
          </div>

          <div className="footer-right">
            <h3>Liên hệ</h3>
            <div className="services-column">
              <p>Tổng đài: 1900 1877</p>
              <p>Hotline: 0896 229 555</p>
              <p>Email: support@greenfuturetech</p>
              <h3>Theo dõi Green Future</h3>
              <img src="/icon-facebook.svg" alt="G" />
              <img src="/icon-tiktok.svg" alt="G" />
              <img src="/icon-insta.svg" alt="G" />
              <img src="/icon-youtube.svg" alt="G" />
              <img src="/icon-linkedin.svg" alt="G" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <div className="copyright">
          <p>© 2025 Green Future corp. All rights reserved.</p>
        </div>

        <div className="follow-us">
          <p>Điều khoản sử dụng</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
