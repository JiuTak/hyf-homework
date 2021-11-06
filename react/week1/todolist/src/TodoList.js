const TodoList = (props) => {
  return (
    <li>
      <input type="checkbox" className="inputBox" /> I need to {props.todo}
    </li>
  );
};

export default TodoList;
