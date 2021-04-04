import logo from './logo.svg';
import React, { Component } from 'react'
import './TodoApp.css';
import './bootstrap.css';

import { withRouter } from 'react-router'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import HeaderComponent from './HeaderComponent'
import AuthenticatedRoute from './AuthenticatedRoute';
class TodoApp extends Component {

    render() {
        return (
            <div className='TodoApp'>
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/reactLearning" exact component={ReactLearning}></Route>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos" component={TodoListComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>

                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>


                {/* // <>
            // <LoginComponent></LoginComponent>
            // <WelcomeComponent></WelcomeComponent>
            // </> */}

            </div>
        );
    }

}



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
        if (this.state.username === 'A' && this.state.password === 'A') {
            AuthenticationService.registerSccessfullLogin(this.state.username, this.state.password);

            this.props.history.push(`/welcome/${this.state.username}`);
            /// this.setState({hasLoginFailed:false,showSuccessMessage:true});
            //console.log("success");
        } else {
            this.props.history.push("/login");
            this.setState({ hasLoginFailed: true, showSuccessMessage: false });
            console.log("failed");
        }
    }
}

class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ id: 1, description: 'learning React by Saatvik Sir', done: false, targetDate: new Date() },
            { id: 2, description: 'learning SpringBoot Saatvik Sir', done: false, targetDate: new Date() },
            { id: 3, description: 'learning SQL by Dhir Sir', done: false, targetDate: new Date() },
            { id: 4, description: 'learning CSS (Self)', done: false, targetDate: new Date() }]
        }
    }
    render() {
        return (
            <>
                <div className='TodoListComponent'> Todo List</div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed ?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(

                                    todo =>
                                        <tr key={todo.id}>{/*solves issue of console unique key*/}
                                            {/* <td>{todo.id}</td> */}
                                            <td >{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                )


                            }
                        </tbody>

                    </table>
                </div>
            </>
        )
    }
}


class FooterComponent extends Component {
    render() {
        return (
            <div className="FooterComponent">
                <footer className="footer">
                    <span className="text-muted">All right Reserved @Niraj Singh</span>
                </footer>
            </div>

        )
    }
}


class LogoutComponent extends Component {
    render() {
        return (
            <div className="LogoutComponent">
                <h1>You are Successfuly logged out from session</h1>
                <div className="container">Thank You for using our application. </div>
            </div>

        )
    }
}


class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Welcome!</h1>
                <div className='WelcomeComponent container'>Welcome in {this.props.match.params.name}. You can magane your todo list, click <Link to="/todos">here</Link></div>
            </>

        )
    }
}
class ReactLearning extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to <code>React Learning</code> Demo Code.
                </p>
            </div>

        )
    }

}

function ErrorComponent() {
    return (<div className="ErrorComponent">Invalid URL Entered else contact support at xyz</div>)

}


//function component for auth(failed)
function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>login failed</div>;
    }

    return null;
}


//function component for auth(success)
function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Successfull loggedin</div>
    }

    return null;
}
export default TodoApp;