//inbuilt component provided by React
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

//style
import './TodoApp.css';
import './bootstrap.css';

//self component created below
import ReactLearningComponent from './ReactLearningComponent';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoListComponent from './TodoListComponent';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import TodoComponent from './TodoComponent';


class TodoApp extends Component {

    render() {
        return (
            <div className='TodoApp'>
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/reactLearning" exact component={ReactLearningComponent}></Route>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}></AuthenticatedRoute>
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