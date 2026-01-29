import React from 'react'; // Add this if it's missing

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  );
}

export default UserList;