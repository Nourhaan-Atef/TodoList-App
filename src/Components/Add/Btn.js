import React, { Fragment } from "react";
import styles from "../../Pages/AddItem.module.css";
function AddItemBtn({ btntype }) {
  return (
    <Fragment>
      <div className="col-12">
        <button className={`${styles.btn} col-12 m-0`}>{btntype}</button>
      </div>
    </Fragment>
  );
}

export default AddItemBtn;
