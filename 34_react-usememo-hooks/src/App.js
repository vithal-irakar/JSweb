import React, { useState, useMemo } from 'react';
import Child from './components/child';
import './App.css';

function App() {

  const [i, setI] = useState(0);

  function onClickHandle(){
    setI(i+1)
  }

  const memoChild = useMemo (() => {
      return <Child></Child>
  }, [i]);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Use Memo</h3>
        <h2>i: {i}</h2>
        <button onClick={onClickHandle}>Increment I</button>
        <h3>Normal render</h3>
        <Child></Child>
        <h3>memo render</h3>
         {memoChild}
      </header>
    </div>
  );
}

export default App;
