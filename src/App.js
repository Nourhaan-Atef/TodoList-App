import "./App.css";
import TodoList from "./Pages/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddItem from "./Pages/AddItem";
import { useState } from "react";
import Modify from "./Pages/Modify";
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Personal",
      content: "welcom to notion",
      priority: "high",
    },
    {
      id: 2,
      title: "Work",
      content: "we have to work on todo app",
      priority: "urgent",
    },
  ]);

  const [certainTodo, setCertainTodo] = useState([]);

  const handleDeleteTodo = (id) => {
    const newTodo = todo.filter((todo) => id !== todo.id);
    setTodo(newTodo);
  };

  const getCertainTodo = (id) => {
    const newTodo = todo.filter((todo) => id === todo.id);
    const todoList = todo.filter((todo) => id !== todo.id);
    setTodo(todoList);
    setCertainTodo(newTodo);
  };

  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route
            path="/TodoList-App"
            exact
            element={
              <TodoList
                Todos={todo}
                handleDeleteTodo={handleDeleteTodo}
                setTodo={setTodo}
                getCertainTodo={getCertainTodo}
              />
            }
          />
          <Route
            path="/AddItem"
            element={<AddItem todo={todo} setTodo={setTodo} />}
          />

          <Route
            path="/Modify"
            element={
              <Modify todos={todo} todo={certainTodo} setTodo={setTodo} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
