import React from 'react'
import '../css/Footer.css'

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
                <div class="footer-nav">
                    <h2 class="footer-title">Về chúng tôi</h2>
                    <a href="/#" class="category">Trang chủ</a>
                    <a href="/#" class="category">Liên hệ</a>
                    <a href="/#" class="category">Về chúng tôi</a>
                    <a href="/#" class="category">Tài khoản</a>    
                </div>
                <div class="footer-nav-category">
                    <h2 class="footer-title">Danh mục</h2>
                    <a href="/#" class="category">Giải trí</a>
                    <a href="/#" class="category">Khoa học</a>
                    <a href="/#" class="category">Chính trị</a>
                    <a href="/#" class="category">Xã hội</a>
                </div>
                <div class="footer-follow-us">
                    <h2 class="footer-title">Theo dõi chúng tôi</h2>
                </div>
            </div>
        </footer>

    </div>
  )
}
