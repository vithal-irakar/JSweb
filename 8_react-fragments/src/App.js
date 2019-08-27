import React, {Component, Fragment} from 'react';

import './App.css';

const Temp = () =>{
  return(
  // <div>
  //   <div>Hi</div>
  //   <div>Hello</div>
  // </div>

  //  [
  //   <div key="1">Hi</div>,
  //   <div key="2">Hello</div>
  //  ]
    
   <Fragment>
    <div>Hi</div>
    <div>Hello</div>
   </Fragment>
   

  ) 
}

class App extends Component {

  render(){
    return (
      <div className="App">
         <Temp/>
      </div>
    );
  }
  
}

export default App;
