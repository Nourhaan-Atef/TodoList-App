import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AddItemBtn from "../Components/Add/Btn";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Todo from "../Components/Todo/Todo";
// import styles from "./TodoList.module.css";
function TodoList({ Todos }) {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-between mb-5  ">
          <Search />
          <NavLink to="/AddItem" className="col-lg-4 col-md-4 col-12">
            <AddItemBtn btntype="Add Item" />
          </NavLink>
        </div>
      </div>
      <Todo Todos={Todos} />
    </Fragment>
  );
}

export default TodoList;
