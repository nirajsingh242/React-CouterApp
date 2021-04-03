import React,{Component} from 'react'
import './TodoApp.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
class TodoApp extends Component{

    render()
    {
        return(
            <div className='TodoApp'>
            <Router>
                <Switch>
                <Route path="/" exact component={LoginComponent}></Route>
                <Route path="/login"  component={LoginComponent}></Route>
                <Route path="/welcome/:name" component={WelcomeComponent}></Route>
                <Route  component={ErrorComponent}></Route>
                </Switch>
            </Router>


            {/* // <>
            // <LoginComponent></LoginComponent>
            // <WelcomeComponent></WelcomeComponent>
            // </> */}

            </div>
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
                {this.state.hasLoginFailed && <div>login failed</div>}
                {this.state.showSuccessMessage && <div>Successfull loggedin</div>}
                {/* //commened below 2 lines becouse of no use as we got enhanced way to handle condition */}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
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
    if(this.state.username==='A' && this.state.username==='A')
    {

        this.props.history.push(`/welcome/${this.state.username}`);
       /// this.setState({hasLoginFailed:false,showSuccessMessage:true});
        console.log("success");
    }else{
        this.props.history.push("/login");
        //this.setState({hasLoginFailed:true,showSuccessMessage:false});
        console.log("failed");
    }
}
}
class WelcomeComponent extends Component
{
    render(){
        return (
            <div className='WelcomeComponent'> Welcome {this.props.match.params.name}</div>
        )
    }
}

function ErrorComponent()
{
  return  ( <div className="ErrorComponent">Invalid URL Entered else contact support at xyz</div>)

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