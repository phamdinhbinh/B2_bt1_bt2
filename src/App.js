import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import { useState } from 'react';
import UserForm from './UserForm';
import Greeting from './Greeting';
function App() {
  const [userInput, setUserInput] = useState("");
  
  return (
    <div>
    <Header/>
    <UserForm setUserInput={setUserInput} />
    <Greeting myName1={userInput}/>
    </div>
    
   
  );
}

export default App;
