import { Routes, Route, Link } from 'react-router-dom';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import { EditUser } from './components/EditUser';

const App = () => {
  return (
    <div className="App">
      <h1>React CRUD operations using PHP API and MySQL</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="user/create">Create User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<ListUser />} />
        <Route path='/user/create' element={<CreateUser />} />
        <Route path='/user/edit/:userId' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
