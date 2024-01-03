import React, { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import JobComponent from "../../Components/JobComponent/JobComponent";
import style from './jobs.module.css'

export default function Jobs() {

  const [jobs, setJobs ] = useState(useRouteLoaderData("root").data);

  const handleDelete = (id)  => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== id))
  }

  return (
    <div className="container">
      <h1 className="title">Perfect Jobs For You</h1>
      <div className={style.jobs}>
      {jobs.map((job) => (
        <JobComponent  handleDelete={handleDelete} key={job.id} job={job} />
      ))}
    </div>
    </div>
  );
}
