import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Pages/AddItem.module.css";
import AddItemBtn from "./Btn";

function AddItemHeader() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="head col-lg-8 col-md-8 col-6">
            <h2 className={styles.header}>ADD An Item </h2>
          </div>
          <NavLink to="/TodoList-App" className="col-lg-4 col-md-4 col-6">
            <AddItemBtn btntype=" Back To Todo List"  />
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}

export default AddItemHeader;
