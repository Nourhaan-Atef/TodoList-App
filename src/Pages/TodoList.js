import React, { Fragment } from "react";
import AddItemBtn from "../Components/Add/AddItemBtn";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import styles from "./TodoList.module.css";
function TodoList() {
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        <Search />
        <AddItemBtn />
      </div>
    </Fragment>
  );
}

export default TodoList;
