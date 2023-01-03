import React, { Fragment, useState } from "react";
// import Todo from "../Todo/Todo";
import styles from "./Search.module.css";
function Search({ Todos, setTodo }) {
  // const [search, setSearch] = useState("");
  // // console.log(search);
  // const filterTodos = (e) => {
  //   const search1 = e.target.value.toLowerCase();
  //   const filterTodos = Todos.filter((todos) =>
  //     search === "" ? todos : todos.title.toLowerCase().includes(search1)
  //   );
  //   setTodo(filterTodos);
  // };

  return (
    <Fragment>
      <div className={`${styles.search} col-lg-6 col-md-6 col-sm-12`}>
        <input
          type="text"
          placeholder="Search Here :)"
          className="col-12"
          // onChange={(e) => filterTodos(e)}
        />
      </div>
    </Fragment>
  );
}

export default Search;
