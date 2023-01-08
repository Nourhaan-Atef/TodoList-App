import React, { Fragment } from "react";
import styles from "../Styles/AddItem.module.css";
import style from "../Styles/Search.module.css";
import { useState } from "react";

function ModifyForm({ todos, todo, setTodo }) {
  // const id = todo.id;
  const [title, setTitle] = useState(todo[0].title);
  const [content, setContent] = useState(todo[0].content);
  const [priority, setPriority] = useState(todo[0].priority);
  const [modified, setmodified] = useState(false);
  // console.log(todo);

  const handleModifyTodo = (e) => {
    e.preventDefault();
    setTodo([...todos, { id: todo[0].id, title, content, priority }]);
    setmodified(true);
    // console.log(todo); 
    return todos;
  };

  return (
    <Fragment>
      <div className="container">
        <form onSubmit={handleModifyTodo}>
          <div className="row my-3">
            <div className="col-12 p-0">
              <label className="col-lg-1 col-3 p-0">Title</label>
              <input
                type="text"
                className={`${style.inp} col-lg-6 col-9`}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12 p-0">
              <label className="col-lg-1 col-3 p-0">Content</label>
              <input
                type="text"
                className={`${style.inp} col-lg-6 col-9`}
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12 p-0">
              <label className="col-lg-1 col-3 p-0">Priority</label>
              <select
                name="priorites"
                id="priorites"
                className={`${style.inp} col-lg-3 col-md-6 col-9`}
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
                required
              >
                <option value="">Choose todo priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div className={styles.addBtn}>
            <button className={styles.add}>Modified</button>
          </div>
          {modified ? (
            <div className={styles.added}>
              <p>Modified Done</p>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </Fragment>
  );
}

export default ModifyForm;
