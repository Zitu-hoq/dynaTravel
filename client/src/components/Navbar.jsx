import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";

function Navbar(){

    let [clicked, setClicked] = useState(false);

    let loggedin = localStorage.getItem("token");

    const handleClick = () =>{
        setClicked(!clicked);
    }

    const handlelogout =() =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    }


    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo"><span className="main-logo">dyna</span>Travel</h1>

            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked? "fas fa-times" : "fas fa-bars"}></i>
            </div>


            <ul className={clicked? "nav-menu active": "nav-menu"}>
            {MenuItems.map((item, index) =>{
                return(
                <li key={index}>
                <Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
                </li>
                )
            })}
            {loggedin?<Link to="/profile"><button type="submit">Profile</button></Link>:<Link to="/signup"><button type="submit" >Sign Up</button></Link>}
            </ul>
        </nav>
    );
}

export default Navbar;
