import React from 'react';

const Assignment =(props)=>{
    return(
        <div>
            <input type = 'text' onChange = {props.change}/>
            <p>Length of the text is: {props.len}</p>
            {props.len < 5 ? <p>Text too short</p>: <p>Text too long</p>};
        </div>
    )
}
export default Assignment;
