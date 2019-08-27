//import React from 'react';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    name:'techsith'
  }

  changeName = (newName) => {
    this.setState({
  
        //name:'Awesome Techsith'
        name:newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
        name:event.target.value
    })
  }
  render (){
    return (
      <div className="App">
        <br/> <br/>
        <button onClick={() => this.changeName('Awesome Techsith :(')}>Change State using Anon Function</button>
        <button onClick={this.changeName.bind(this, 'Awesome Techsith :)')}>Change State using Bind Function</button>
        <br/> <br/>
          <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
        <br/> <br/>
        <div>{this.state.name}</div>
        
      </div>
    );
  }
  
}

export default App;
