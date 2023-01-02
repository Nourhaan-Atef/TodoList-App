import React, { Fragment } from "react";
import styles from "../../Pages/AddItem.module.css";
import style from "../Search/Search.module.css";

function AddForm() {
  return (
    <Fragment>
      <div className="container">
        <form>
          <div className="row my-3">
            <div className="col-12 p-0">
              <label className="col-lg-1 col-3 p-0">Title</label>
              <input type="text" className={`${style.inp} col-lg-6 col-9`} />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12 p-0">
              <label className="col-lg-1 col-3 p-0">Content</label>
              <input type="text" className={`${style.inp} col-lg-6 col-9`} />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12 p-0">
              <label className="col-lg-1 col-3 p-0">Priority</label>
              <select
                name="priorites"
                id="priorites"
                className={`${style.inp} col-lg-6 col-9`}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>
          <div className={styles.addBtn}>
            <button className={styles.add}>ADD</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AddForm;
