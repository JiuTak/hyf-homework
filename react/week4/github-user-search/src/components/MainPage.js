import React from "react";
import { useContext } from "react";
import { Context, useUser } from "./ContextUser";

function MainPage() {
  const context = useContext(Context);
  const { users, isLoaded, error, total_count } = useUser();

  return (
    <div>
      <h1> Github user searcher</h1>
      <input
        type="text"
        value={context.userSearchInput}
        onChange={(e) => {
          const inputValue = e.target.value;
          context.setUserSearchInput(inputValue);
        }}
      />

      <ul>
        {!isLoaded ? (
          <li>Loading...</li>
        ) : error ? (
          <li>{error}</li>
        ) : total_count === 0 ? (
          <li>No Items...</li>
        ) : (
          users.map((user) => {
            return (
              <li>
                {user.login} <a href="user.html_url"> {user.html_url} </a>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default MainPage;
