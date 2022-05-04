import React, { useContext } from 'react';
import '../../css/Admin/dashboard.css';
import AppContext from '../AppContext'
import {NavLink} from 'react-router-dom';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faNewspaper,faBars,faUser,faList,faSearch } from '@fortawesome/free-solid-svg-icons';

export default function DashBoard() {
    const {state } = useContext(AppContext);
    const {user} = state;

    // const signOut = () =>{
    //     localStorage.removeItem("token");
    //     dispatch({ type: "CURRENT_USER", payload: null});
    // };
  return (
    <>
    <input type="checkbox" id="nav-toggle"/>
    <div className="side__bar">
        <div className="sidebar-brand">
            <h2>
                <span>DN</span>
                <span className="logo"> DINO NEWS</span>
            </h2>
        </div>
        <div className="side__bar__menu">
            <ul className='box__sidebar__navItem'>
                <li>
                    <NavLink  to="/admin/dashboard" className="item__sidebar__li">
                        <span><FontAwesomeIcon icon={faHouse} /></span>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/news" className="item__sidebar__li">
                        <span><FontAwesomeIcon icon={faNewspaper} /></span>
                        <span>News</span>
                    </NavLink>
                </li>
                <li>   
                    <NavLink to="/admin/category" className="item__sidebar__li">
                        <span><FontAwesomeIcon icon={faList} /></span>
                        <span>Category</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/user" className="item__sidebar__li">
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <span>User</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>

    <div className="main-content">
        <header id="header__admin">
            <h2>
                <label htmlFor="nav-toggle"><span><FontAwesomeIcon icon={faBars} /> </span></label>
                <span>Dashboard</span> 
            </h2>
            <div className="search__box__admin">
                <input type="search" placeholder="Type here"/>
                <span><FontAwesomeIcon icon={faSearch} /></span>
            </div>
            <div className="user__box__admin">
                <img src="https://source.unsplash.com/random" alt="" width="30px" height="30px"/>
                <div>
                    {user?(
                        <div>
                        <h4> Hello, {user.userName} </h4>
                        <small>Super Admin</small>
                        </div>
                    ):(
                        setInterval(function check(){
                            return (<Redirect to='/error'/>);
                        },3000)
                       
                
                    )
                }
                    
                </div>
            </div>
        </header>
        
    </div>



</>
  )
}
