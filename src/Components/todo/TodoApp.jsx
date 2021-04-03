import React,{Component} from 'react'
import './TodoApp.css';
class TodoApp extends Component{

    render()
    {
        return(
            

            <LoginComponent></LoginComponent>


        );
    }

}



class LoginComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            usernameplaceholer:'username',
            username:'',
            password:''
        }
       // used arrow function so no use of binding
      ///  this.handleUserNameChange=this.handleUserNameChange.bind(this);
        //this.handlePasswordChange=this.handlePasswordChange.bind(this);
            //this.changeEvent=this.changeEvent.bind(this);
    }
    render()
    {
        return(
            <div className="LoginComponent">
                Username  <input type="text" name="username" value={this.state.username} onChange={this.changeEvent} placeholder={this.state.usernameplaceholer}/>&nbsp;
                Password  <input type="password" name="password" value={this.state.password} onChange={this.changeEvent}/>&nbsp;&nbsp;
                <button type="submit" name="submit">Login</button>
            </div>

        );
    }
//commenting below chane eventt as we are making common function
//     handleUserNameChange=(event)=>
//     {
//         //console.log(event.target.value);
//             this.setState({ username: event.target.value})
//    }
//     handlePasswordChange=(event)=>
//     {
//         //console.log(event.target.value);
//             this.setState({ password: event.target.value})
//     }

//common change event
changeEvent=(event)=>
{
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]:event.target.value })
}


}
export default TodoApp;