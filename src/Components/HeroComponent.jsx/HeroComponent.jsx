import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/Job hunt.gif";
import style from "./hero.module.css";

export default function HeroComponent() {
  return (
    <>
      <div className="container">
        <div className={style.hero}>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={style.heroText}
          >
            <h1>
              Wecome to <span>Halal Jibika</span>,
            </h1>
            <h1>
              <span> Find JOB </span>Without Compromising on
              <span> Your DEEN</span>
            </h1>
            <br />
            <h3>We have 3M+ Live Jobs</h3>
            <br />
            <button>
              <Link to="./jobs">Explor Now</Link>
            </button>
            <br />
          </div>
          <div className={style.heroImg}>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
