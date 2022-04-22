import React from 'react'
import '../../css/Auth/Login.css'

export default function Login() {
  return (
    <div className="wrapper-login">
      <div className="card-login">
          <h1 class="login-title">Đăng nhập</h1>
          <div className="input-box">
            <span>Tài khoản</span>
            <input class="Username" type="text" autoComplete='off' placeholder="Nhập tài khoản" />
          </div>
          <div className="input-box">
            <span>Mật khẩu</span>
            <input class="Password" type="password" autoComplete='off' placeholder="Nhập mật khẩu" />
          </div>
          
          <div className="input-box">
            <input class="submit" type="submit" value="Đăng nhập" />
          </div>
        {/* <hr class="line-break" /> */}
          {/* <div className="login-social">
              <h3 class="login-title">Hoặc đăng nhập với</h3>
              <div className="social-icon-media">
                <ul className="social">
                    <li>
                      <a href="/#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href="/#"><i class="fa fa-google" aria-hidden="true"></i></a>
                      </li>
                    <li>
                      <a href="/#"><i class="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                </ul>
              </div>
          </div> */}

      </div>


    </div>
  )
}
