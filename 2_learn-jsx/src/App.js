import React, {Component} from 'react';
import './App.css';
import SayHello from './SayHello'
// function SayHello(){
//   return <h1>hello</h1>
// }

class App extends Component {
  render (){
    return (
      <div>
          <SayHello/>
      </div>
    );
  }
  
}

export default App;
