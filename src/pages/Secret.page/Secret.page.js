import React from "react";
import styles from "./Secret.page.module.css";

const SecretPage = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <p>You are welcome on secret page. Secret data is loading....</p>
        <div className={styles["loader"]}> </div>
      </div>
    </div>
  );
};

export default SecretPage;
