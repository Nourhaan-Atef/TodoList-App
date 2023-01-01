import React, { Fragment } from "react";
import styles from "./AddItem.module.css";
function AddItemBtn() {
  return (
    <Fragment>
      <button className={styles.btn}>Add Item</button>
    </Fragment>
  );
}

export default AddItemBtn;
