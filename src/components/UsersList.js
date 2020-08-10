import React from "react";
import UserItem from "./UserItem";
import useGetUsers from "../hooks/useGetUsers";

export default function UsersList() {
  const fetchedUsers = useGetUsers();

  return (
    <ul>
      {fetchedUsers &&
        fetchedUsers.map((u) => <UserItem key={u.id} user={u}></UserItem>)}
    </ul>
  );
}
