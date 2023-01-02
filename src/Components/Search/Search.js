import React, { Fragment } from "react";
import styles from "./Search.module.css";
function Search() {
  return (
    <Fragment>
      <div className={`${styles.search} col-lg-6 col-md-6 col-sm-12`}>
        <input type="text" placeholder="Search Here :)" className="col-12"/>
      </div> 
    </Fragment>
  );
}

export default Search;
