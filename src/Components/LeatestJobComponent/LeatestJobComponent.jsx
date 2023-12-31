import React, { useState } from "react";
import style from "./leatestJob.module.css";
import Jobs from "../../Pages/Jobs/Jobs";
import { useRouteLoaderData } from "react-router-dom";
import JobComponent from "../JobComponent/JobComponent";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function LeatestJobComponent() {
  const [jobs, setJobs] = useState(useRouteLoaderData("root").data);
  const leatesJobs = jobs.slice(0, 5);
  const [favJobsIds, addToFavorite] = useLocalStorage("favJobIds");
  const [appliedJobIds, addToApplied] = useLocalStorage("appliedJobIds");

  const handleDelete = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <>
      <div className={style.leatestJob}>
        <div className="container">
          <h1 className={style.title}>LEATEST JOBS __________</h1>
          <div className={style.jobs}>
            {leatesJobs.map((job) => (
              <JobComponent
                isFav={!!favJobsIds[job.id]}
                isApplied={!!appliedJobIds[job.id]}
                handleDelete={handleDelete}
                addToApplied={addToApplied}
                addToFavorite={addToFavorite}
                key={job.id}
                job={job}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
