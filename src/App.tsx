import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { todoItemsDefault } from './Todo';
import UserCard from './UserCard';
import { defaultUser, defaultUsers, User } from './User';
import UserList from './UserList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

  function handleUserClick(user: User){
    alert(`Du hast auf User ${user.name} geklickt.`);
  }


  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/todos">Todo Liste</Link>
          <Link to="/users">Benutzerprofile</Link>  
        </nav>
        <Routes>
          <Route path="/todos" element={<TodoList todoItems={todoItemsDefault} />} />
          <Route path="/users" element={<UserList users={defaultUsers} onClick={handleUserClick} />}></Route>  
          <Route path="/" element={<TodoList todoItems={todoItemsDefault} />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
