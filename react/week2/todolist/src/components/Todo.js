import React from "react";

const TodoItemLists = (props) => {
  const { description, deadline } = props.todo;
  return (
    <li>
      
        {description} by: {deadline}
      
    </li>
  );
};
  //   <input type="checkbox" className="inputBox" /> I need to {props.todo}

export default TodoItemLists;
