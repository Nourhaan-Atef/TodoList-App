import React, { Fragment } from "react";
import styles from "./TodoCard.module.css";
function Card({ Todos }) {
  return (
    <Fragment>
      {Todos.map((el) => {
        return (
          <div className="col-lg-3 col-md-6 col-12 " key={el.id}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h2>{el.title}</h2>
                <select name="priorites" id="priorites">
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
                <button>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Card;
