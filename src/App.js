import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import UserList from './components/Users/UsersList';


function App() {
  const users = [
    {id: Math.random(), name: 'Thib', age: 3}
  ]
  return (
    <div>
      <AddUser />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
