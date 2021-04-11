import React, { Component } from 'react'
import './TodoApp.css';
import './bootstrap.css';
import AuthenticationService from './AuthenticationService.js';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameplaceholer: 'username',
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // used arrow function so no use of binding
        ///  this.handleUserNameChange=this.handleUserNameChange.bind(this);
        //this.handlePasswordChange=this.handlePasswordChange.bind(this);
        //this.changeEvent=this.changeEvent.bind(this);

        this.loginClicked = this.loginClicked.bind(this);
    }
    render() {
        return (
            <>
                <div className="LoginComponent">
                    <h1>Login</h1>
                    <div className="container">
                        {this.state.hasLoginFailed && <div className="alert alert-warning">login failed</div>}
                        {this.state.showSuccessMessage && <div>Successfull loggedin</div>}
                        {/* //commened below 2 lines becouse of no use as we got enhanced way to handle condition */}
                        {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                Username  <input type="text" name="username" value={this.state.username} onChange={this.changeEvent} placeholder={this.state.usernameplaceholer} />&nbsp;
                Password  <input type="password" name="password" value={this.state.password} onChange={this.changeEvent} />&nbsp;&nbsp;
                <button className="btn btn-success" type="submit" name="submit" onClick={this.loginClicked}>Login</button>
                    </div>
                </div>
            </>
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
    changeEvent = (event) => {
        // console.log(event.target.name);
        //console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClicked() {
        // if (this.state.username === 'A' && this.state.password === 'A') {
        //     AuthenticationService.registerSccessfullLogin(this.state.username, this.state.password);

        //     this.props.history.push(`/welcome/${this.state.username}`);
        //     /// this.setState({hasLoginFailed:false,showSuccessMessage:true});
        //     //console.log("success");
        // } else {
        //     this.props.history.push("/login");
        //     this.setState({ hasLoginFailed: true, showSuccessMessage: false });
        //     console.log("failed");
        // }

        AuthenticationService
        .executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(() => {
            AuthenticationService.registerSccessfullLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        }).catch( () =>{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        })
            

    }
}
export default LoginComponent;