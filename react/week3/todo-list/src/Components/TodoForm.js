import React, { useState } from "react";

function ToDoForm() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Add todo"
      />
      <button>Add</button>
    </form>
  );
}

export default ToDoForm;
