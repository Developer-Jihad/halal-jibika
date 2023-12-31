import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import img from "../../../assets/images/login.gif";
import styles from "../auth.module.css"; // Import your CSS module
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authImage}><img src={img} alt="" /></div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          {/* Sign Up Form */}
          <div className={styles.signUpForm}>
            <h2>Sign Up</h2><br />
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Name" />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" placeholder="Password" />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button className={styles.btn}>Sign Up</button>
          </div>
          <br />
          
          <div className={styles.flex}>
          <p>Already have an Account?    </p> 
          <Link to="/signin"> Please Sign Up</Link>
          </div><br /><hr />
          <br />
          {/* Social Icons */}
          <h3>Sign-In with:</h3>
          <div className={styles.socialIcons}>
            <FcGoogle className={styles.icon} />
            <FaFacebook className={styles.icon} style={{color:"#1877f2"}} />
            <FaGithub className={styles.icon} />
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
