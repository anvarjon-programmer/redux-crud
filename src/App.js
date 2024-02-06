import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Auth from './features/posts/Auth';
import Bar from './features/posts/Bar';

function App() {
  return (
    <div className="App">
      <Bar/>
      <Routes>
         <Route path='auth' element={<Auth/>}/>
         <Route path='users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
