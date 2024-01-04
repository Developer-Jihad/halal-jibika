import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import JobComponent from "../../Components/JobComponent/JobComponent";
import style from "./jobs.module.css";

export default function Jobs() {
  const [appliedJobIds, setAppliedJobIds] = useState(
    JSON.parse(localStorage.getItem("appliedJobIds")) || {}
  );
  const [favJobsIds, setFavJobsIds] = useState(
    JSON.parse(localStorage.getItem("favJobIds")) || {}
  );
  const [jobs, setJobs] = useState(useRouteLoaderData("root").data);

  useEffect(() => {
    localStorage.setItem("appliedJobIds", JSON.stringify(appliedJobIds));
  }, [appliedJobIds]);

  useEffect(
    () => localStorage.setItem("favJobIds", JSON.stringify(favJobsIds)),
    [favJobsIds]
  );

  const addToFavorite = (id) => {
    setFavJobsIds((prevFavJobsIds) => {
      const updatedFavJobsIds = { ...prevFavJobsIds };
      if (updatedFavJobsIds[id] !== undefined) delete updatedFavJobsIds[id];
      else updatedFavJobsIds[id] = true;
      return updatedFavJobsIds;
    });
  };

  const addToApplied = (id) => {
    setAppliedJobIds((prevAppliedJobsId) => {
      const updatedAppliedJobsId = { ...prevAppliedJobsId };
      if (updatedAppliedJobsId[id] !== undefined)
        delete updatedAppliedJobsId[id];
      else updatedAppliedJobsId[id] = true;
      return updatedAppliedJobsId;
    });
  };

  const handleDelete = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const leatestJobs = jobs.slice(0, 5);
  console.log(leatestJobs);

  return (
    <div className="container">
      <h1 className="title">Perfect Jobs For You</h1>
      <div className={style.jobs}>
        {jobs.map((job) => (
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
  );
}
