import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
import menuItems from "./MenuItems";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [linkactive, setLinkActive] = useState("Home")

    const clickHandler = () => {
        setActive(prev => !prev)
    }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <h1 >LOGO <FontAwesomeIcon icon={faReact} size="xl" /></h1>
        </div>
        <div className="menu-icon" onClick={clickHandler} >
            <FontAwesomeIcon style={{color:"white"}}  icon={active ? faXmark : faBars} size="xl"/>
      </div>
        <div>
          <ul className={active ? "nav-menu active" : "nav-menu"} >
            {menuItems.map((item, index) => (
              <li>
                <a href="#" className={linkactive === item.title ? "nav-links active" : "nav-links "} onClick={() => {setLinkActive(item.title)}}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className={active ? "nav-btn btn-7 active" : "nav-btn btn-7"}> <span>Sign Up</span> </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
