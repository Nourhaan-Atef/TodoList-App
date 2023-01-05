import React, { Fragment } from "react";
import styles from "../Styles/Header.module.css";
import Pin from "../assets/pin.png";

function Header() {
  return (
    <Fragment>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Todo App</h1>
        </header>
        <div>
          <img src={Pin} alt="Pin Icon" />
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
