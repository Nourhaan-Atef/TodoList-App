import React, { Fragment } from "react";
import AddForm from "../Components/Add/AddForm";
import AddItemHeader from "../Components/Add/AddItemHeader";
import Header from "../Components/Header/Header";
function AddItem() {
  return (
    <Fragment>
      <Header />
      <AddItemHeader />
      <AddForm />
    </Fragment>
  );
}

export default AddItem;
