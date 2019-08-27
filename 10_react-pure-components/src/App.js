import React, {Component, PureComponent} from 'react';
import './App.css';

const Temp = (props) =>{
  console.log('Render Temp');
  return (<div>{props.val}</div>)

}

class App extends PureComponent {

  state = {
    val : 1
  }

  componentDidMount(){
    setInterval( () => {
      this.setState( () =>{
        // return { val : Math.random() }
        return { val : 1}
      });
    }, 2000)
  }

  // shouldComponentUpdate(nextProp, nextState){

  //   console.log('next State', nextState);
  //   console.log('Current State', this.state);

  //   return ( this.state.val === nextState.val ? false : true)

  // }
  render(){
    console.log('Render app');
    return (
      <div className="App">
          <Temp val ={this.state.val}/>
      </div>
    );
  }
  
}

export default App;
