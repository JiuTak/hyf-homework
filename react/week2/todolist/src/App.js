import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoLists";
import TodoForm from "./components/TodoForm";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="lists">
      <h1> Todo list</h1>
      <p> You have used {} seconds on this page</p>
      <Timer />

      <div className="todo-app">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
