import "./App.css";
import TodoList from "./TodoList";
import SubTodoList from "./SubTodoList";

const HighPriority = [
  "do Danish homework",
  "do React homework",
  "grocery shop",
];

function App() {
  return (
    <div className="lists">
      <ul className="App">
        {HighPriority.map((todo) => {
          return <TodoList key={todo} todo={todo} />;
        })}
        <SubTodoList subtodo="cleaning house" />
      </ul>
    </div>
  );
}

export default App;
