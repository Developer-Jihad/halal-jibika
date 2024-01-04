import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import JobComponent from "../../Components/JobComponent/JobComponent";
import style from "./jobs.module.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Jobs() {
  const [jobs, setJobs] = useState(useRouteLoaderData("root").data);

  const [favJobsIds, addToFavorite] = useLocalStorage("favJobIds");
  const [appliedJobIds, addToApplied] = useLocalStorage("appliedJobIds");

  const handleDelete = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

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
