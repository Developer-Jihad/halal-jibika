import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import style from './layout.module.css'

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className={style.outlet}><Outlet /></div>
      <Footer />
    </div>
  );
}
