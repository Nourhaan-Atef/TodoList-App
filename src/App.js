import "./App.css";
import TodoList from "./Pages/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddItem from "./Pages/AddItem";

function App() {
  const Todos = [
    {
      id: 1,
      title: "Notion",
      content: "I can use notion to save your thoughts and ideas.",
      completed: false,
      priority: "low",
    },
    {
      id: "2",
      title: "Work",
      content: "I have to make a todo app in this week.",
      completed: true,
      priority: "urgent",
    },
    {
      id: 3,
      title: "Personal",
      content: "Check out My habits and improve my skills",
      completed: false,
      priority: "high",
    },
    {
      id: 4,
      title: "Study",
      content: "I want read about ReactJs",
      completed: true,
      priority: "medium",
    },
  ];
  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route
            path="/TodoList-App"
            exact
            element={<TodoList Todos={Todos} />}
          />
          <Route path="/AddItem" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
