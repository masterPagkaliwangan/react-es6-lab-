import UserList from './UserList';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
}