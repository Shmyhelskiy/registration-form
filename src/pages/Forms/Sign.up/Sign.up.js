import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sign.up.module.css";
import { appRoutes } from "../../../routes/Routes";
import { regName, regEmail, regPassword } from "../../../Data/RegExp";

export const Users = [];
const SignUp = () => {
  const [borderFirsName, setBorderFirsName] = useState("1px solid whitesmoke"),
    [borderSecondName, setBorderSecondName] = useState("1px solid whitesmoke"),
    [borderEmail, setBorderEmail] = useState("1px solid whitesmoke"),
    [borderPassword, setBorderPassword] = useState("1px solid whitesmoke");

  const [firstName, setFirstName] = useState(""),
    [secondName, setSecondName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const firstNameChange = (event) => {
    if (event.target.value.match(regName)) {
      setFirstName(event.target.value);
      setBorderFirsName("1px solid green");
    } else {
      setFirstName("");
      setBorderFirsName("1px solid red");
    }
  };

  const firstSecondChange = (event) => {
    if (event.target.value.match(regName)) {
      setSecondName(event.target.value);
      setBorderSecondName("1px solid green");
    } else {
      setSecondName("");
      setBorderSecondName("1px solid red");
    }
  };

  const emailChange = (event) => {
    if (event.target.value.match(regEmail)) {
      setEmail(event.target.value);
      setBorderEmail("1px solid green");
    } else {
      setEmail("");
      setBorderEmail("1px solid red");
    }
  };

  const passwordChange = (event) => {
    if (event.target.value.match(regPassword)) {
      setPassword(event.target.value);
      setBorderPassword("1px solid green");
    } else {
      setPassword("");
      setBorderPassword("1px solid red");
    }
  };

  const isEmailExist = (email) => {
    console.log(email);
    for (let i = 0; i < localStorage.length; i++) {
      if (email === localStorage.key(i)) {
        return false;
      }
    }
    return true;
  };

  const submitChange = () => {
    if (
      firstName !== "" &&
      secondName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      if (isEmailExist(email)) {
        localStorage.setItem(
          email,
          JSON.stringify({
            firstName,
            secondName,
            email,
            password,
          })
        );
      } else alert("This email is registered");
    }
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
          <figcaption>Sing up</figcaption>
        </figure>

        <div className={styles["names-box"]}>
          <input
            className={styles["input"]}
            placeholder="First Name"
            onChange={firstNameChange}
            style={{
              border: borderFirsName,
            }}
            required
          />

          <input
            className={styles["input"]}
            placeholder="Last Name"
            onChange={firstSecondChange}
            style={{
              border: borderSecondName,
            }}
            required
          />
        </div>

        <input
          className={styles["input"]}
          placeholder="Email Address"
          onChange={emailChange}
          style={{
            border: borderEmail,
          }}
          required
        />

        <input
          className={styles["input"]}
          placeholder="Password"
          onChange={passwordChange}
          type="password"
          style={{
            border: borderPassword,
          }}
          required
        />

        <div className={styles["checkbox"]}>
          <input type="checkbox" />
          <span>
            I want to receive inspiration, marketing promotions and updates via
            email
          </span>
        </div>

        <button className={styles["submit-button"]} onClick={submitChange}>
          Sign Up
        </button>

        <div className={styles["signature"]}>
          <Link to={appRoutes.singIn.path}>
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
