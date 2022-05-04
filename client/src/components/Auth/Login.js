import React, { useContext, useState} from 'react'
import '../../css/Auth/Login.css'
import axios from 'axios';
import AppContext from '../AppContext';
import {useHistory} from 'react-router-dom';

export default function Login() {
    const {dispatch} = useContext(AppContext);
    const [userInput, setUserInput] = useState({ email: "", password:""});
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();
    const onChangeHandle = (e) =>{
        setUserInput({ ...userInput, [e.target.name]: e.target.value});
    }
    const onSubmitHandle = async (e) => {
        try{
            e.preventDefault();
            const option = {
                method: "post",
                url: "/api/v1/auth/login",
                data: userInput,
            };
            const response = await axios(option);
            const {token, userName } = response.data.data;
            localStorage.setItem("token", token);
            dispatch({ type: "CURRENT_USER", payload:{ userName}});
            if(userName === 'Admin'){
                history.push("/admin/dashboard")
            }else{
                history.push("/");
            }
        }
        catch(error){
            setErrorMessage(error.response.data.message);
        }
    }
  return (
    <div id="body">
        <div className="wrapper-login">
            <h1>Đăng nhập</h1>
            {errorMessage && (
                <p className='error-msg'>Error:{errorMessage} </p>
            )}
            
            <form onSubmit={onSubmitHandle}>
                <div className="txt-field">
                    <input type="email" name='email' required value={userInput.email} onChange={onChangeHandle} />
                    <span></span>  
                    <label>Email</label>
                </div>
                <div className="txt-field">
                    <input type="password" id='' name='password' required value={userInput.password} onChange={onChangeHandle} />
                    <span></span>       
                    <label>Mật khẩu</label>
                </div>
                <div className="pass">Quên mật khẩu?</div>
                <input type="submit" value="Đăng nhập" />
                <div className="signup_link">
                    Không có tài khoản? <a href="/register">Đăng ký</a>
                </div>
            </form>
        </div>
    </div>
  )
}
