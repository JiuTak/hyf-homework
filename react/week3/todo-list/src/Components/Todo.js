import React, { useCallback, useEffect, useState } from "react";

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function ToDo() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setTodos(result);
        setIsLoading(false);
      });
  });

  useEffect(() => {
    addTodo();
  }, []);

  return (
    <div>
      {/* {isLoading && <div>Loading....</div>} */}
      
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {" "}
            {todo.description} | <input type="checkbox" />
            {todo.deadline}
          </li>
        );
      })}
    </div>
  );
}

export default ToDo;
