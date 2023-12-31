import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import style from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className={style.header}>
      <nav
        ref={menuRef}
        className={`${style.nav} ${isMenuOpen ? style.showMenu : ""}`}
      >
        <Link className={style.logo} to="/">
          <img src={logo} alt="" />
        </Link>
        <div className={style.menuIcon} onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className={`${style.routes} ${style.desktopMenu}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contacts</NavLink>
        </div>
        <div className={`${style.routes} ${style.desktopMenu}`}>
          <NavLink to="/signin">SignIn</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </nav>
      <div className={`${style.routes} ${style.mobileMenu}`}>
        {isMenuOpen && (
          <>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/jobs" onClick={closeMenu}>
              Jobs
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contacts
            </NavLink>
            <NavLink to="/signin" onClick={closeMenu}>
              SignIn
            </NavLink>
            <NavLink to="/profile" onClick={closeMenu}>
              Profile
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
