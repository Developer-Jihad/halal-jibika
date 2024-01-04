import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import JobComponent from "../../Components/JobComponent/JobComponent";
import style from "../Jobs/jobs.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Favourite() {
  const [jobs, setJobs] = useState(useRouteLoaderData("root").data);

  const [favJobsIds, addToFavorite] = useLocalStorage("favJobIds");
  
  const isFavEmpty = !!Object.values(favJobsIds);

  const handleDelete = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">
        {isFavEmpty
          ? "Your favourite JOBS"
          : "You Don't have any Favourite Job"}
      </h1>
      <div className={style.jobs}>
        {isFavEmpty &&
          jobs.map((job) => {
            if (!favJobsIds[job.id]) return null;
            return (
              <JobComponent
                isFav={true}
                handleDelete={handleDelete}
                addToFavorite={addToFavorite}
                key={job.id}
                job={job}
              />
            );
          })}
      </div>
    </div>
  );
}
