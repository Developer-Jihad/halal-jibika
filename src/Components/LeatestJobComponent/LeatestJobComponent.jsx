import React from "react";
import style from "./leatestJob.module.css";
import Jobs from "../../Pages/Jobs/Jobs";

export default function LeatestJobComponent() {
  return (
    <>
      <div className={style.leatestJob}>
        <div className="container">
          <h1 className={style.title}>LEATEST JOBS _______________</h1>
          <Jobs />
        </div>
      </div>
    </>
  );
}
