import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import AddItemBtn from "../Components/Add/Btn";
import Header from "../Components/Header/Header";
import styles from "../Components/Search/Search.module.css";
import cardStyle from "../Components/Todo/TodoCard.module.css";
function TodoList({ Todos, handleDeleteTodo, setTodo }) {
  const [search, setSearch] = useState("");

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-between mb-5  ">
          <div className={`${styles.search} col-lg-6 col-md-6 col-sm-12`}>
            <input
              type="text"
              placeholder="Search Here :)"
              className="col-12"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <NavLink to="/AddItem" className="col-lg-4 col-md-4 col-12">
            <AddItemBtn btntype="Add Item" />
          </NavLink>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {Todos.filter((todo) => {
            return search.toLowerCase() === ""
              ? todo
              : todo.title.toLowerCase().includes(search);
          }).map((el, index) => {
            return (
              // Todos
              <div
                className="col-lg-3 col-md-6 col-12 "
                key={index}
                value={Todos}
              >
                <div className={cardStyle.card}>
                  <div className={cardStyle.header}>
                    <h2>{el.title}</h2>
                    <select
                      name="priorites"
                      id="priorites"
                      defaultValue={el.priority}
                      className=" col-6"
                    >
                      <option value="none">Choose todo priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <hr />
                  <p>{el.content}</p>
                  <div className={cardStyle.btns}>
                    <button>modify</button>
                    <button onClick={handleDeleteTodo}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default TodoList;
