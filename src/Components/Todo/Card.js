import React, { Fragment } from "react";
import styles from "./TodoCard.module.css";
function Card({ Todos, handleDeleteTodo }) {
  return (
    <Fragment>
      {Todos.map((el, index) => {
        return (
          <div className="col-lg-3 col-md-6 col-12 " key={index} value={Todos}>
            <div className={styles.card}>
              <div className={styles.header}>
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
              <div className={styles.btns}>
                <button>modify</button>
                <button onClick={handleDeleteTodo}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Card;
