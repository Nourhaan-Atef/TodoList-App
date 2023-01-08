import React, { Fragment } from "react";
import AddItemHeader from "../Components/AddItemHeader";
import Header from "../Components/Header";
import ModifyForm from "../Components/ModifyForm";

function Modify({ todos, todo, setTodo }) {
  return (
    <Fragment>
      <Header />
      <AddItemHeader name="Modify Todo" />
      <ModifyForm todo={todo} setTodo={setTodo} todos={todos} />
    </Fragment>
  );
}

export default Modify;
