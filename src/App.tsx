import './App.css';
import TodoList from './TodoList';
import { todoItemsDefault } from './Todo';
import { defaultUsers, User } from './User';
import UserList from './UserList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PostList from './components/posts/PostList';

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
          <Link to="/posts">Posts</Link> 
        </nav>
        <Routes>
          <Route path="/todos" element={<TodoList todoItems={todoItemsDefault} />} />
          <Route path="/users" element={<UserList users={defaultUsers} onClick={handleUserClick} />}></Route>  
          <Route path="/posts" element={<PostList />} />
          <Route path="/" element={<TodoList todoItems={todoItemsDefault} />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
