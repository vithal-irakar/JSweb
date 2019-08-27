import React, {Component, lazy, Suspense} from 'react';
import './App.css';
//import logo from './logo.svg';
//import MyComp from './components/myComp';
const MyComp = lazy(() => import ('./components/myComp'));


class App extends Component  {

render(){
  return (
    // <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <header className="App-header">
          <div>Another components</div>
          <Suspense fallback={<div>Loading...</div>}>
            <MyComp/>
         </Suspense>
        </header>
      </div>
    //</Suspense>
  );
}
  
}

export default App;
