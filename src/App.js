import {Routes, Route} from 'react-router-dom'
import './App.css';
import App1 from './Register';
import RegisterSuccess from './Registrationsuccess';
import Login from './login';
import HomePage from './home/Home';

import Header1 from './Header/header';
function App() {
  return(
   
  <Routes>
    <Route exact path="/" element={<App1 />} />
  <Route exact path="/reg" element={<RegisterSuccess />} />
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/home" element={<HomePage/>}/>
  <Route exact path="/header"  element={<Header1/>}/>
    </Routes>
   
);
  }

export default App;
