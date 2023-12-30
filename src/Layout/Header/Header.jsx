import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <nav className={style.nav}>
        <Link className={style.logo} to="/">
          <img src={logo} alt="" srcset="" />
        </Link>
        <div className={style.routes}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contacts</NavLink>
        </div>
        <div className={style.routes}>
          <NavLink to="/signin">SignIn</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </nav>
    </div>
  );
}
