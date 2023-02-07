import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import { useState } from 'react';
import UserForm from './UserForm';
import Greeting from './Greeting';
function App() {
  return (
    <div>
    <Header/>
    <UserForm/>
    {/* <Greeting/> */}
    </div>
    
   
  );
}

export default App;
