
import {Component } from 'react';
import { Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';

class WelcomeComponent extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            welcomeMessage:''
        }
        //binding below method with current class
      //  this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this);
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Welcome!</h1>
                <div className='WelcomeComponent container'>Welcome in {this.props.match.params.name}. You can magane your todo list, click <Link to="/todos">here</Link></div>
                <div className='WelcomeComponent container'>Click here to get customize welcome message.
                {/* <img src="http://localhost:8080/hitCounter/page/100" id="image" title="Free Counter" alt="web counter"></img>                                     */}
                <button className="btn btn-success col-md-2" onClick={this.retrievWelcomeMessage}>Get Welcome Message</button>
                </div>
                <div className="container WelcomeComponent">
                    {this.state.welcomeMessage}
                </div>
            
            
            </>

        )
    }

    retrievWelcomeMessage=()=>
    {
        //console.log("Welcome message customized");
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
        // //.catch

        // HelloWorldService.executeHelloWorlBeandService()
        // .then(response => this.handleSuccessfulResponse(response))
    
        HelloWorldService.executeHelloWorlPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error=> this.handleError(error))
    
    }

    handleError=(error)=>
    {
        console.log(error.message);
        console.log(error.toString());
        this.setState({welcomeMessage : error.message});
    }
    
    handleSuccessfulResponse =(response)=>
    {
        // this.setState(
        //     {welcomeMessage : response.data}
        //     )

        this.setState(
            {welcomeMessage : response.data.message}
            )
    }
}

export default WelcomeComponent;