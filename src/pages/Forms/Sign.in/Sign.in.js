import React, { useState } from "react";
import styles from "./Sign.in.module.css";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../routes/Routes";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const emailChange = (event) => {
    if (checkEmail(event.target.value)) {
      setEmail(event.target.value);
    } else setEmail("");
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const checkEmail = (email) => {
    for (let i = 0; i < localStorage.length; i++) {
      if (email === localStorage.key(i)) {
        return true;
      }
    }
    return false;
  };

  const checkPassword = (email) => {
    if (email) {
      return JSON.parse(localStorage.getItem(email)).password;
    }
    return null;
  };
  const checkData = () => {
    if (checkPassword(email) === password) {
      navigate("/SecretPage");
    } else alert(`Email or password are wrong`);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <figure className={styles["image-container"]}>
          <div className={styles["image-box"]}>
            <img
              className={styles["image"]}
              src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
              alt="Lock"
            />
          </div>
          <figcaption>Sing in</figcaption>
        </figure>

        <input
          className={styles["input"]}
          placeholder="Email Address"
          onChange={emailChange}
          required
        />

        <input
          className={styles["input"]}
          placeholder="Password"
          onChange={passwordChange}
          type="password"
          required
        />

        <div className={styles["checkbox"]}>
          <input type="checkbox" />
          <span> Remember me</span>
        </div>

        <button className={styles["submit-button"]} onClick={checkData}>
          Sign In
        </button>

        <div className={styles["signature"]}>
          <Link to={appRoutes.ForgotPassword.path}>Forgot password?</Link>
          <Link to={appRoutes.singUp.path}>Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
