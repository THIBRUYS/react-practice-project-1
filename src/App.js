import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react'
import Card from './components/UI/Card'

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevList) => {
      return [...prevList, {id: Math.random().toString(), name: userName, age: userAge}]
    })
  }
  let list = (
    <Card>
      <p> No users found, add one !</p>
    </Card>
  )
  if (usersList.length > 0) {
    list = (<UsersList users={usersList}/>);
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {list}
    </div>
  );
}

export default App;
