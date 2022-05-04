import React from 'react'
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div>
        <footer id="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="dino-logo">
                        <h1>DINO NEWS</h1>
                    </div>
                    <div className="footer-info">
                        <div className="phone-number">
                            Điện thoại: 033220203
                        </div>
                        <div className="email">
                            Email: hung220901@gmail.com
                        </div>
                        <div className="address">
                            Địa chỉ: 148 ấp 1 xã Hiệp Phước, huyện Nhà Bè, TP HCM.
                        </div>
                        
                        <div className="liense">
                            © 2022 DINO NEWS - Trang tin tức tại Việt Nam
                        </div>
                    </div>
                    
                </div>
                <div className="footer-nav">
                    <h2 className="footer-title">Về chúng tôi</h2>
                    <a href="/#" className="category">Trang chủ</a>
                    <a href="/#" className="category">Liên hệ</a>
                    <a href="/#" className="category">Về chúng tôi</a>
                    <a href="/#" className="category">Tài khoản</a>    
                </div>
                <div className="footer-nav-category">
                    <h2 className="footer-title">Danh mục</h2>
                    <a href="/#" className="category">Giải trí</a>
                    <a href="/#" className="category">Khoa học</a>
                    <a href="/#" className="category">Chính trị</a>
                    <a href="/#" className="category">Xã hội</a>
                </div>
                <div className="footer-follow-us">
                    <h2 className="footer-title">Theo dõi chúng tôi</h2>
                    <div className="social__icon__footer">
                        <FontAwesomeIcon icon={faFacebook} className="item__social__icon__footer fb__icon" />
                        <FontAwesomeIcon icon={faTwitter} className="item__social__icon__footer tw__icon" />
                        <FontAwesomeIcon icon={faYoutube} className="item__social__icon__footer yt__icon"/>
                    </div>
                </div>
            </div>
        </footer>

    </div>
  )
}
