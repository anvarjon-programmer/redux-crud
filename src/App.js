import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Auth from './features/posts/Auth';
import Bar from './features/posts/Bar';
import SighIn from './features/users/sighIn';
import Booksid from './components/Booksid';
import Login from './features/posts/Login';

function App() {
  return (
    <div className="">
      <Bar/>
      <Routes>
         <Route path='/auth' element={<Auth/>}/>
         <Route path='sighIn' element={<SighIn/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='users' element={<Users/>}/>
         <Route path='books/:id' element={<Booksid  />}/>
      </Routes>
    </div>
  );
}

export default App;
