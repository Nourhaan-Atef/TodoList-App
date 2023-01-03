import "./App.css";
import TodoList from "./Pages/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddItem from "./Pages/AddItem";
import { useState } from "react";
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
  const handleDeleteTodo = (i) => {
    const deleteTodo = [...todo];
    deleteTodo.splice(i, 1);
    setTodo(deleteTodo);
  };
  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route
            path="/TodoList-App"
            exact
            element={
              <TodoList Todos={todo} handleDeleteTodo={handleDeleteTodo} setTodo={setTodo} />
            }
          />
          <Route
            path="/AddItem"
            element={<AddItem todo={todo} setTodo={setTodo} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
