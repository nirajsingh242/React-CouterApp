import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './Components/learning-example/FirstComponent';
import SecondComponent from './Components/learning-example/SecondComponent';
import ThirdComponent from './Components/learning-example/ThirdComponent';
import Counter from './Components/counter/Counter';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


//class component
class App extends Component
{
  render()
  {//code written in return part is jsx
    return(
      
      <>
      <div className="App">     My Counter Application
 <br></br>
      <Counter ></Counter>
      </div>
      </>
      //<LearningComponents></LearningComponents>
    );

  }

} 

class LearningComponents extends Component
{
  render()
  {//code written in return part is jsx
    return(

      <div className="LearningComponents">
       <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );

  }

}


export default App;
