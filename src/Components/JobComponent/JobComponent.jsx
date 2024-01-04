import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import style from "./job.module.css";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

export default function JobComponent({
  job,
  handleDelete,
  addToFavorite,
  addToApplied,
  isFav,
  isApplied,
}) {
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
          {logo ? (
            <img className={style.brandLogo} src={logo} alt={companyName} />
          ) : (
            <h1>{companyName}</h1>
          )}
        </div>
        <div onClick={() => addToFavorite(id)} className="icon">
          {!isFav ? <MdFavoriteBorder /> : <MdFavorite />}
        </div>
      </div>
      <br />
      <h2>{position}</h2>
      <b>{title}</b>
      <p>{description}</p>
      <div className="flex">
        <div onClick={() => addToApplied(id)}>
          {isApplied ? (
            <button style={{ color: "salmon" }} className="secondary-btn">
              Applied
            </button>
          ) : (
            <button className="secondary-btn">Apply Now</button>
          )}
        </div>
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
