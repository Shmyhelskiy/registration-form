import React from "react";
import { Link, NavLink } from "react-router-dom";
import { appRoutes } from "../../routes/Routes";
import styles from "./Nav.module.css";
import "./Nav.css";

const Nav = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["contaiter"]}>
        <Link to={appRoutes.home.path} className={styles["link"]}>
          Home
        </Link>
      </div>
      <div className={styles["contaiter"]}>
        <NavLink to={appRoutes.singIn.path} className={styles["link"]}>
          Sing in
        </NavLink>
        <NavLink to={appRoutes.singUp.path} className={styles["link"]}>
          Sing up
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
