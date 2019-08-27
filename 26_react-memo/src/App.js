import React, { Component } from 'react';
//import logo from './logo.svg';
import FunctionalComp from './components/functionalComp';
import './App.css';

class App extends Component {

  state = {
    val : 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({val : 1})
    }, 3000)
  }
  render (){
    return (
      <div className="App">
         <FunctionalComp val={this.state.val}></FunctionalComp>
      </div>
    );
  }
  
}

export default App;
