import React, { useEffect, useState } from "react";

export const Context = React.createContext();
export const useUser = () => React.useContext(Context);

export const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userSearchInput, setUserSearchInput] = useState("");
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchUsers = async (userInput) => {
    try {
      await fetch(`https://api.github.com/search/users?q=${userInput}`)
        .then((response) => {
          if (!response.ok) {
            throw Error("cannot fetch the data from API");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          setUsers(data.items);
          setIsLoaded(true);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!userSearchInput) {
      return "fail to bring";
    } else {
      fetchUsers(userSearchInput);
    }
    fetchUsers();
  }, [userSearchInput]);

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        userSearchInput,
        setUserSearchInput,
        error,
        isLoaded,
      }}
    >
      {children}
    </Context.Provider>
  );
};
