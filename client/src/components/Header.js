import React,{useContext} from 'react';
import AppContext from './AppContext'
import '../css/Header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    const {state, dispatch } = useContext(AppContext);
    const {user} = state;
    const signOut = () =>{
        localStorage.removeItem("token");
        dispatch({ type: "CURRENT_USER", payload: null});
    };
  return (
    <div>
        <header id="header"> 
            <div className="logo">
                <h1> <Link to='/'>DINO NEWS</Link></h1>
            </div>
            <div className="search-box">
                <input type="text" name="search" className="search-input" placeholder="Type to search"/>
            </div>
            <ul id="menu">
                <li className="active"><Link to='/'>Home</Link></li>
                <li><Link to='/'>Category</Link>
                    <ul>
                        <li><Link to='/'>Funny</Link></li>
                        <li><Link to='/'>Covid</Link></li>
                        <li><Link to='/'>Education</Link></li>
                    </ul>
                </li>
                <li><Link to='/license'>License</Link></li>
                {user? (
                    <>
                            <li>
                            <Link to="/" > Hello, {user.userName}  </Link>
                            <ul>
                                <li onClick={() => signOut()}>
                                    Sign out
                                </li> 
                            </ul>
                    
                        </li> 
                    </>
                ):(
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
          
            </ul>
        </header>
    </div>
  )
}
