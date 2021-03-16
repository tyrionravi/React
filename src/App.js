import React from "react";
import "./App.css";
import './Person/Person.css';
//import Greet from './Component/Greet';
//import HookCounterTwo from "./Component/HookCounterTwo";
//import Person from './Person/Person';
//import TestClass from "./Person/TestClass";
import TestClass from "./Person/TestClass";
//import AssignClass from "./Person/AssignClass";


function App() {
  return (
    <div className="App">
      <h1>Hi I am a React App</h1>
      <p>This is really working!!!</p>
      
      
  {/*<AssignClass />*/}
  <TestClass />
  
  {/*<Person name= 'Max' age = '28'/>
  <Person name = 'Manu' age = '27'>My Hobby is playing Guitar</Person>
  <Person name = 'Stephanie' age = '26'/>*/}
  
    </div>
  )
}

export default App;
