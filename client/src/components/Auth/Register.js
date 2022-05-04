import React, { useContext, useState}  from 'react'
import '../../css/Auth/Register.css'
import axios from 'axios';
import AppContext from '../AppContext';
import {useHistory} from 'react-router-dom';




export default function Register() {
    const {dispatch} = useContext(AppContext);
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        password:"",
    });
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
                url: "/api/v1/auth/register",
                data: userInput,
            };
            const response = await axios(option);
            const {token, userName } = response.data.data;
            localStorage.setItem("token", token);
            dispatch({ type: "CURRENT_USER", payload:{ userName}});
            history.push("/");
        }
        catch(error){
            setErrorMessage(error.response.data.message);
        }
    }
  return (
    <div id="body">
    <div className="wrapper-register">
        <h1>Đăng ký</h1>
        {errorMessage && 
        (Array.isArray(errorMessage)?(
            errorMessage.map((err) =>(
                <p className='error-msg'>Error:{err} </p>
            ))
        ): (
            <p className='error-msg'>Error:{errorMessage} </p>
        ))}
        <form onSubmit={onSubmitHandle}>
            <div className="txt-field">
                <input type="text" id='name'  value={userInput.name} onChange={onChangeHandle}  />
                <span></span>  
                <label>Tên tài khoản</label>
            </div>
            <div className="txt-field">
                <input type="email" id='email' value={userInput.email} onChange={onChangeHandle}  />
                <span></span>  
                <label>Email</label>
            </div>
            <div className="txt-field">
                <input type="password" id='password'  value={userInput.password} onChange={onChangeHandle}  />
                <span></span>       
                <label>Mật khẩu</label>
            </div>
            <div className="txt-field">
                <input type="password"   id='re-password' />
                <span></span>       
                <label>Nhập lại mật khẩu</label>
            </div>
            <div className="pass">Quên mật khẩu?</div>
            <input type="submit" value="Đăng nhập"/>
            <div className="signup_link">
                Đã có tài khoản? <a href="/login">Đăng nhập</a>
            </div>
        </form>
    </div>
</div>


  )
}
