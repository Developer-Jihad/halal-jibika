import React from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import styles from "../auth.module.css";
import img from "../../../assets/images/login.gif";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authImage}>
        <img src={img} alt="" />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          {/* Sign In Form */}
          <div className={styles.signInForm}>
            <h2>Sign In</h2>
            <br />
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" placeholder="Password" />
            </div>
            <button className={styles.btn}>Sign In</button>
          </div>
          <br />
          
          <div className={styles.flex}>
          <p>Don't have an Account?    </p> 
          <Link to="/signup"> Please Sign Up</Link>
          </div><br /><hr />
          <br />
          {/* Social Icons */}
          <h3>Sign-In with:</h3>
          <div className={styles.socialIcons}>
            <FaGoogle className={styles.icon} />
            <FaFacebook className={styles.icon} />
            <FaGithub className={styles.icon} />
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
