import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AddItemBtn from "../Components/Add/Btn";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Todo from "../Components/Todo/Todo";

function TodoList({ Todos, handleDeleteTodo, setTodo }) {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-between mb-5  ">
          <Search Todos={Todos} setTodo={setTodo} />
          <NavLink to="/AddItem" className="col-lg-4 col-md-4 col-12">
            <AddItemBtn btntype="Add Item" />
          </NavLink>
        </div>
      </div>
      {<Todo Todos={Todos} handleDeleteTodo={handleDeleteTodo} />}
    </Fragment>
  );
}

export default TodoList;
