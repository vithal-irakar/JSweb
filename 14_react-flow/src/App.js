import React, {Component} from 'react';
import './App.css';
//typeguard of functional component
type FuncProp = {
  str:string
}
const funcComp= (props:FuncProp) => {
  return(<div>props.str</div>)
}
//typeguard
type TestProps ={
  str:string,  //If you change it to number it will give error
  num:number,   //num?:number(optional) . If you dont pass any number . Whatever there in typeguard we need provide or else it will give error.
  ary:Array<number>
}

//typeguard for state.
type TestState = {
  message : string
}

class Test extends Component<TestProps, TestState> {

  state = {
    message: 'hi'
  }
  //default values
  static defaultProps = {       
    str:'techsith'
  }

  //Since we are using flow we need to define h1

  h1:?HTMLHeadingElement;
  render(){
    return (
      <div>
          <h1>{this.props.str}</h1>
          <h1>{this.props.num}</h1>
          <h1>{this.props.ary.map(val => val)}</h1>
          <h1 ref={h => this.h1 = h}>{this.state.message}</h1>
        
      </div>
    );
  }
 
}

class App extends Component <{}> {
  render(){
    return (
      <div className="App">
         <Test 
         str = {'Techsith'}
         num={1}
         ary={[1,2,3]}
         />
         <funcComp str={'techsith'}/>
      </div>
    );
  }
 
}

export default App;
