import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Details() {
  const jobDetails = useLoaderData();
  console.log(jobDetails);

  return <div>Details</div>;
}
