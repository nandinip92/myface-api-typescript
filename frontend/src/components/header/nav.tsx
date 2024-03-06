import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
export const Nav: React.FC = () => {
  const [showMenu,setShowMenu]=useState(false);
  const toggleMenu=()=>{
    setShowMenu(!showMenu);
  }
  const closeMenuOnMobile=()=>{
    setShowMenu(false);
  }
  return (
    <>
      <nav className={`navbar ${showMenu? "active":""}`}>
        <div className="nav-content">
          <div className="app-name">MyFace</div>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/posts" className="nav-link" onClick={closeMenuOnMobile}>
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link" onClick={closeMenuOnMobile}>
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="#" className="nav-link" onClick={closeMenuOnMobile}>
                +New Post
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`hamburger ${showMenu? "active":""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </>
  );
};
