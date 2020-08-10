import { useEffect, useState } from "react";

function useGetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(`${env.process.BASE_URL}/users`, {
      signal: signal
    }).then((response) => {
      response.json().then((fetchedUsers) => {
        setUsers(fetchedUsers);
      });
    });

    return function cleanUp() {
      abortController.abort();
    };
  }, []);

  return users;
}

export default useGetUsers;
