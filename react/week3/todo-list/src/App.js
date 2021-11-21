import "./App.css";
import ToDo from "./Components/Todo";
import ToDoList from "./Components/TodoList";
import ToDoForm from "./Components/TodoForm";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState()
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <ToDoForm />
      <br />
      <ToDo />
    </div>
  );
}

export default App;
