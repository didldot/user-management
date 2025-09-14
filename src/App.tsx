import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { todoItemsDefault } from './Todo';
import UserCard from './UserCard';
import { defaultUser, defaultUsers, User } from './User';
import UserList from './UserList';

function App() {


  function handleUserClick(user: User){
    alert(`Du hast auf User ${user.name} geklickt.`);
  }


  return (
    <div className="App">
      <h2>Benutzerprofil</h2>
      <UserList users={defaultUsers} onClick={handleUserClick}></UserList>

      <h2>Todo Liste</h2>
      <TodoList todoItems={todoItemsDefault}></TodoList>
    </div>
  );
}

export default App;
