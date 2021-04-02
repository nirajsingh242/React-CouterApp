import React,{ Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';
//function component --> converted to class component

class Counter extends Component
{

    constructor()
{
  super();//before using this in constructor we need to use super method otherwise it will show " ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor"
    this.state={
        counter:0
    }
this.increment=this.increment.bind(this);// coonecting increment method to acces value in state which is defined in consttructor
//arrow function =()=> do not require binding in its constructor
this.decrement=this.decrement.bind(this);
this.counterbutton1Element=React.createRef();//cretaing red for child claass to acces reset function of child
this.counterbutton2Element=React.createRef();//cretaing red for child claass to acces reset function of child
this.counterbutton3Element=React.createRef();//cretaing red for child claass to acces reset function of child
}
    render()
    {//code written in return part is jsx
      return(
        
        <>

        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} ref={this.counterbutton1Element}></CounterButton>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} ref={this.counterbutton2Element}></CounterButton>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} ref={this.counterbutton3Element}></CounterButton>
        <br/><br/>
        <button class="reset" onClick={this.reset}>Reset</button>
        <br/><br/>
        <span className="count" >{this.state.counter}</span>

        </>
        //<LearningComponents></LearningComponents>
      );
  
    }

    reset=()=>//not binding this method to constructor but using arrow function
    {
        
    this.setState(
        {
            counter:0
        }

    );
    
  this.counterbutton1Element.current.reset();
  this.counterbutton2Element.current.reset();
  this.counterbutton3Element.current.reset();
    }
  
 increment(by) //update count after by x amount after button click and save in state object (counter++)
 {
    console.log("increment from parent");

    //this.state.counter++;//bad practice to mutate . use setState

    this.setState(
        (prevState)=>
        {
          return { counter:prevState.counter+by}
        }

    );

}


decrement(by) 
{
   console.log("decrement from parent");

   this.setState(
       (prevState)=>
       {
         return { counter:prevState.counter-by}
       }

   );

}
}

class CounterButton extends Component {

    //Define the initial state in constructor
    //set initial state to 0 counter=0
constructor()
{
  super();//before using this in constructor we need to use super method otherwise it will show " ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor"
    this.state={
        counter:0
    }
this.increment=this.increment.bind(this);// coonecting increment method to acces value in state which is defined in consttructor
//arrow function =()=> do not require binding in its constructor
this.decrement=this.decrement.bind(this);

}


    render() {
        //const style={fontSize: "40px", color: "Red"};
        //style={style}
        return (

            <div className="App">
               
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
                <span className="count" ref={this.props.CounterButtonElement}>{this.state.counter}</span> 

            </div>
        );

    }

    reset=()=>//not binding this method to constructor but using arrow function
    {
        
    this.setState(
        {
            counter:0
        }

    );
   
    }
  

    //means local method called which present in class itself "this.increment"

 increment() //update count after by x amount after button click and save in state object (counter++)
 {
    console.log("increment");

    //this.state.counter++;//bad practice to mutate . use setState

    this.setState(
        {
            counter:this.state.counter+this.props.by
        }

    );

    this.props.incrementMethod(this.props.by);

}


decrement() 
 {
    console.log("decrement from child");

    this.setState(
        {
            counter:this.state.counter-this.props.by
        }

    );

    this.props.decrementMethod(this.props.by);

}


}




CounterButton.defaultProps={
by:2
}


CounterButton.propTypes={
    by:PropTypes.number
}
export default Counter;
