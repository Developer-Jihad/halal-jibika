import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import JobComponent from "../../Components/JobComponent/JobComponent";
import style from "../Jobs/jobs.module.css";

export default function Applied() {
  const [jobs, setJobs] = useState(useRouteLoaderData("root").data);
  const [appliedJobIds, setAppliedJobIds] = useState(
    JSON.parse(localStorage.getItem("appliedJobIds")) || {}
  );
  useEffect(() => {
    localStorage.setItem("appliedJobIds", JSON.stringify(appliedJobIds));
  }, [appliedJobIds]);

  const isApplied = !!Object.values(appliedJobIds).length;

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

  return (
    <div className="container">
      <h1 className="title">
        {isApplied ? "Your Applied JOBS" : "You Don't have any Applied Job"}
      </h1>
      <div className={style.jobs}>
        {isApplied &&
          jobs.map((job) => {
            if (appliedJobIds[job.id] === undefined) return null;
            return (
              <JobComponent
                isApplied={true}
                handleDelete={handleDelete}
                addToApplied={addToApplied}
                key={job.id}
                job={job}
              />
            );
          })}
      </div>
    </div>
  );
}
