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
            password:'',
            hasLoginFailed:false,
            showSuccessMessage:false
        }
       // used arrow function so no use of binding
      ///  this.handleUserNameChange=this.handleUserNameChange.bind(this);
        //this.handlePasswordChange=this.handlePasswordChange.bind(this);
            //this.changeEvent=this.changeEvent.bind(this);

            this.loginClicked=this.loginClicked.bind(this);
    }
    render()
    {
        return(
            <div className="LoginComponent">
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                Username  <input type="text" name="username" value={this.state.username} onChange={this.changeEvent} placeholder={this.state.usernameplaceholer}/>&nbsp;
                Password  <input type="password" name="password" value={this.state.password} onChange={this.changeEvent}/>&nbsp;&nbsp;
                <button type="submit" name="submit" onClick={this.loginClicked}>Login</button>
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
   // console.log(event.target.name);
    //console.log(event.target.value);
    this.setState({ [event.target.name]:event.target.value })
}

loginClicked()
{
    if(this.state.username==='a' && this.state.username==='a')
    {
        this.setState({hasLoginFailed:false,showSuccessMessage:true});
        console.log("success");
    }else{
        this.setState({hasLoginFailed:true,showSuccessMessage:false});
        console.log("failed");
    }
}
}


//function component for auth(failed)
function ShowInvalidCredentials(props)
{
if(props.hasLoginFailed)
{
    return   <div>login failed</div>;
}

return null;
}


//function component for auth(success)
function ShowLoginSuccessMessage(props)
{
if(props.showSuccessMessage)
{
    return    <div>Successfull loggedin</div>
}

return null;
}
export default TodoApp;