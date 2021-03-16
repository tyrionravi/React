import React, {Component} from 'react';
import Assignment from './Assignment';

class AssignClass extends Component{
    state = {
        userInput : ''
    }

    onChangeHandler = (event)=>{
        this.setState({userInput: event.target.value});

    }
    render(){
        return (
            <div>
            <Assignment change = {this.onChangeHandler} value = {this.state.userInput} 
            len = {this.state.userInput.length}/>
            <p>{this.state.userInput}</p>
            
            </div>
        )
    }
}
export default AssignClass;