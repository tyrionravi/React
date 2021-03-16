import React from 'react';

const Person = (props)=>{
  return(
    <div className = 'Person'>
      <p onClick = {props.click}>Hello {props.name} and your age is {props.age}</p>
      <p>{props.children}</p>
      <input type = 'text' onChange = {props.change} value = {props.name}/>
      
    </div>
  )
}
export default Person;