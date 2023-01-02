import React, { Fragment } from "react";
import Card from "./Card";
// import styles from "./TodoCard.module.css";
function Todo({ Todos }) {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <Card Todos={Todos} />
        </div>
      </div>
    </Fragment>
  );
}

export default Todo;
