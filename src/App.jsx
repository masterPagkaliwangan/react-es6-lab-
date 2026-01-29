import UserList from './UserList';

function App() {
    const users = ['Alice','Bob','Charlie'];
    return <UserList users={users} />;
}

const isLoggedIn = true;

return (
    <div>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </div>
);
