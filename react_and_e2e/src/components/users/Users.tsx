import React, {ReactElement, useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Users = (): ReactElement => {
  const [users, setUsers] = useState<any>([]);

  const loadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(resp.data);
}

useEffect(() => {
  loadUsers()
}, [])

  return (
    <div data-testid="users-page">
      {users.map((user: any) => <Link
        to={`/users/${user.id}`}
        key={user.id}
        data-testid="user-item"
      >
        {user.name}
      </Link>)}
    </div>
  );
};

export default Users;