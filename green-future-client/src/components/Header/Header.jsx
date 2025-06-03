import React from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
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
            <li className="gf-nav-item active">Đặt xe</li>
            <li className="gf-nav-item">Mua xe cũ chính hãng</li>
            
            <li className="gf-nav-item new-item">Thuê xe sân bay</li>
            <li className="gf-nav-item">Giới thiệu</li>
            <li className="gf-nav-item">Tin tức</li>
          </ul>
        </nav>

        {/* User info */}
        <div className="gf-user-info">
        <button onClick={() => navigate('/login')} className="gf-login-btn">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          Đăng nhập</button>
        </div>
      </div>
    </header>
  );
};

export default Header;