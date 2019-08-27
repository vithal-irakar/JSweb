import React, {Component} from 'react';

import './App.css';

class Child extends Component {
  
  constructor(){
    super();
    console.log('Child constructor');
  }

  componentWillMount(){
    
    console.log('Child componentWillMount');
  }

  componentDidMount(){
    console.log('child componentDidMount');
  }
  
  //below are the hooks when we rerender
  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('child shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(){
    console.log('child componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('child prevProps', prevProps);
    console.log('child prevState', prevState);
    console.log('child componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('child  componentWillUnmount');
  }
  render (){
    console.log('Child Render');
    return (
      <div className="App">
        Child Name: {this.props.name}
      </div>
    );
  }
 
}

export default Child;
