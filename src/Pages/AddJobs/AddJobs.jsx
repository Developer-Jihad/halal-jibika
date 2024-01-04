import React, { useState } from "react";
import img from "../../assets/images/addjob.gif";
import styles from "./addjob.module.css";
import axios from "axios";

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    companyName: "",
    position: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/jobs", formData);
      console.log("POST Response:", response.data);
    } catch (error) {
      console.error("Error creating post: ", error);
    }
    console.log("Form submitted:", formData);
    setFormData({
      id: "",
      companyName: "",
      position: "",
      title: "",
      description: "",
    });
  };

  return (
    <div className="container">
      <div className={styles.addJobContainer}>
        <div className={styles.leftColumn}>
          <img src={img} alt="Company Logo" className={styles.logo} />
        </div>
        <div className={styles.rightColumn}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />

            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobForm;
