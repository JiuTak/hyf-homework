import React from "react";
import { useUser } from "./ContextUser";

function MainPage() {
  const {
    users,
    isLoaded,
    error,
    count,
    userSearchInput,
    setUserSearchInput,
  } = useUser();

  return (
    <div>
      <h1> Github user searcher</h1>
      <input
        type="text"
        value={userSearchInput}
        onChange={(e) => {
          const inputValue = e.target.value;
          setUserSearchInput(inputValue);
        }}
      />

      <ul>
        {!isLoaded ? (
          <li>Loading...</li>
        ) : error ? (
          <li>{error}</li>
        ) : count === 0 ? (
          <li>No Items...</li>
        ) : (
          users.map((user) => {
            return (
              <li>
                <a href="user.html_url">{user.login} </a>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default MainPage;
