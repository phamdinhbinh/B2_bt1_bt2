import React from 'react';
import { useState } from 'react';
import Greeting from './Greeting';
export default function UserForm({setUserInput} , {userInput}) {
    // const [userInput, setUserInput] = useState("");
    const handleInputChange = (e) => {
    setUserInput(e.target.value);
    };
    // let myname= ' alo '
    return (
    <div>
        <span>Name : </span>
    <input type="text"
     id='name' 
     placeHolder='Nhập tên'
     onChange={handleInputChange}
     />
    
     {/* <Greeting myName1={userInput}/> */}
    </div>
    );
   }
   