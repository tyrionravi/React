import React, {Component} from 'react';
import Person from './Person';


class TestClass extends Component{
    state = {Persons : [
        {key: 'asd1', name: 'Ravi', age: 28},
        {key: 'asd2', name: 'Zaira', age: 26},
        {key: 'asd3', name: 'Upasana', age:27}
    ],
    showPersons : false
}
    
    onChangeHandler = (event)=>{
        this.setState({Persons : [
            {name: 'Max', age: 28},
            {name: event.target.value, age: 26},
            {name: 'Upasana', age:28}
        ]

        })
    }
    toggleHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = personIndex =>{
            let persons = this.state.Persons.slice();
            console.log('Before splice',  persons);
            persons.splice(personIndex,1);
            console.log('After splice',  persons);
            this.setState({persons:persons});
            //console.log(x);
            console.log('After setState',  persons);
    }


    render(){
        const style ={
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        let persons = null;
        if(this.state.showPersons){
            persons = (<div>
                {this.state.Persons.map((person,Index)=>{
                    return <Person click = {()=>this.deletePersonHandler(Index)}
                    name = {person.name}
                    age = {person.age}
                    key = {person.key}
                    />
                })}
            
        </div> );
        }
        return(
            <div>
                <button onClick = {this.toggleHandler} style = {style}>Switch Name</button>
                {persons}
                
                
            </div>
        )
    }
}
export default TestClass



{/*<h1>My name is {this.state.persons[0].name} and age is {this.state.persons[0].age}</h1>
                <h1>My name is {this.state.persons[1].name} and age is {this.state.persons[1].age}</h1>
        <h1>My name is {this.state.persons[2].name} and age is {this.state.persons[2].age}</h1>
    
    <Person name = {this.state.Persons[0].name} 
            age = {this.state.Persons[0].age} />
            <Person name = {this.state.Persons[1].name} 
            age = {this.state.Persons[1].age} click = {()=>this.switchNameHandler('Dhullu')}
            change = {this.onChangeHandler}
            />
            <Person name = {this.state.Persons[2].name} 
            age = {this.state.Persons[2].age} />

            switchNameHandler = (setName)=>{
        //console.log('Was Clicked');
        this.setState( {Persons : [
            {name: setName, age: 28},
            {name: 'Zaira', age: 26},
            {name: 'Upasana', age:28}
        ]})

    }
    */}