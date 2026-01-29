import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';
import './App.css';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  
  return (
    <div>
      <h1>React Lab Activity</h1>
      
      <h3>Step 4: Static User List</h3>
      <UserList users={users} />
      
      <hr />
      
      <h3>Step 5: Counter (State)</h3>
      <Counter />
      
      <hr />
      
      <h3>Step 6: User API (Hooks)</h3>
      <UserAPI />
    </div>
  );
}

export default App;