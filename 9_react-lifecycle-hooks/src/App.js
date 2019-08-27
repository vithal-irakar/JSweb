import React, {Component} from 'react';
import './App.css';
import Child from './child';

class App extends Component {
  //This runs first 
  //state = {
    //name : 'Peter'
  //};
  constructor(){

    super();
    //Runs after first and overrides first.
    this.state = {
      name : 'John'
    };
    console.log('constructor');
  }

  componentWillMount(){
    //If we want to do something with global events like window or documents we can set here 
    if(window.innerWidth < 500){
      this.setState({innerWidth:window.innerWidth});
    }
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
  
  // Below are the hooks that run after rerender.
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentDidUpdate( prevProps, prevState ){
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log(' componentDidUpdate');
  }

  componentWillUnmount(){
    console.log(' componentWillUnmount');
  }
  changeState(){
    this.setState({name:'Jill'});
  }

  unmountChild(){
    this.setState({name :'Robert'});
  }
  render (){
    console.log('Render');

    if(this.state.name=== 'Robert'){
      return (<div/>)
    }
    return (
      <div className="App">
        Name :{this.state.name}
        | innerWidth: {this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change state</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount child</button>
      </div>
    );
  }
 
}

export default App;
