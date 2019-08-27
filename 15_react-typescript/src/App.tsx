import * as React from 'react';
import './App.css';
import MyClass from './components/MyClass';
import MyComp from './components/MyComp';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <MyClass name={'techsith'} isMarried={true} /> */}
        <MyClass  isMarried={true} />
        <MyComp name ={'techsith'} isMarried={true} kids={2}/>
      </div>
    );
  }
}

export default App;
