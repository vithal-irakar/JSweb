import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

export default () =>{

  const [age, setAge] = useState(21);
  const [name, setName] = useState('Peter');

  return (
          <div className="App">
            <header className="App-header">
              <div>
                <p>
                  Name:<input type="text" value ={name}
                  onChange ={ e => setName (e.target.value)}/>
                </p>
                <p>Age:{age}</p>
                <button onClick={() => setAge(age + 1)}>Increament Age By One</button>
                <p>
                   State= age: {age}, name: {name}
                </p>
              </div>
            </header>
          </div>
         );
}

// class App extends Component {
//   render (){
//     return (
//       <div className="App">
//         <header className="App-header">
          
//         </header>
//       </div>
//     );
//   }
 
// }

// export default App;
