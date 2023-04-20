import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import SignUp from './components/main/SignUp';
import Login from './components/main/Login';
import User from './components/user';
import AddSpace from './components/user/AddSpace';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main/home" />} />
        <Route element={<Main />} path='main'>
          <Route element={<Home />} path='home' />
          <Route element={<SignUp />} path='signup' />
          <Route element={<Login />} path='login' />
        </Route>
        <Route element={<User />} path='user'>
          <Route element={<AddSpace />} path='add_space' />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
