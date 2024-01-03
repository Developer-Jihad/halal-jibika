import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import style from "./job.module.css";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

export default function JobComponent({ job, handleDelete }) {
  const { title, position, logo, id, description, companyName } = job;

  const handleDeleteRequest = async () => {
    try {
      const response = await axios.delete(`http://localhost:9000/jobs/${id}`);
      handleDelete(id);
      console.log("DELETE Response:", response.data);
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  return (
    <div className={style.jobCard}>
      <div className="flex">
        <div>
          <img className={style.brandLogo} src={logo} alt="" />
        </div>
        <div className="icon">
          <MdFavoriteBorder />
        </div>
      </div>
      <br />
      <h2>{position}</h2>
      <b>{title}</b>
      <p>{description}</p>
      <div className="flex">
        <button className="secondary-btn">Apply Now</button>
        <Link to={`/details/${id}`}>
          <div className="icon">
            <BiDetail />
          </div>
        </Link>
        <div className="icon">
          <BiSolidEdit />
        </div>
        <div onClick={handleDeleteRequest} className="icon">
          <RiDeleteBin4Fill />
        </div>
      </div>
    </div>
  );
}
