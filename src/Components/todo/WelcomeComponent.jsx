
import {Component } from 'react';
import { Link} from 'react-router-dom';

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

export default WelcomeComponent;