import React, { Fragment } from "react";
import AddForm from "../Components/Add/AddForm";
import AddItemHeader from "../Components/Add/AddItemHeader";
import Header from "../Components/Header/Header";

function AddItem({todo , setTodo}) {
  return (
    <Fragment>
      <Header />
      <AddItemHeader />
      <AddForm  todo={todo} setTodo={setTodo}/>
    </Fragment>
  );
}

export default AddItem;
