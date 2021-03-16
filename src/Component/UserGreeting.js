import React,{Component} from 'react'

class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        return(
            this.state.isLoggedIn?
            <div>Welcome Ravi</div>:
            <div>Welcome Guest</div>
        )
        {/*let message
        if (this.state.isLoggedIn){
            message = <div>Hello Ravi</div>
        }
        else{
            message = <div>Hello Guest</div>
        }
        return(
            <div>{message}</div>
        )
        if (this.state.isLoggedIn){
            return <div>Hello Vishwas</div>
        }
        else{
            return <div>Hello Guest</div>
        }*/}

    }
}
    


export default UserGreeting 