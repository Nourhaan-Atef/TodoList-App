import React, { Fragment } from "react";
import Header from "../Components/Header";
import AddItemHeader from "../Components/AddItemHeader";
import AddForm from "../Components/AddForm";

function AddItem({ todo, setTodo }) {
  return (
    <Fragment>
      <Header />
      <AddItemHeader name="Adding Todo" />
      <AddForm todo={todo} setTodo={setTodo} />
    </Fragment>
  );
}

export default AddItem;
