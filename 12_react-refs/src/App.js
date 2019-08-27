import React, {Component} from 'react';
import './App.css';


const MyInput = (props) =>{
  return (
     <input 
         // ref={(input)=>{inputRef = input}}
         ref={props.inputRef}
        type="text"/>
  )
}

const FuncCustomComp = () =>{
  let inputRef = null;

  onClick = () =>{
    inputRef.focus();
  }
  return (
    <div>
      <div>
        <span>My Input</span>
        <MyInput
         inputRef={(input)=>{inputRef = input}}
        />
        {/* <input 
          ref={(input)=>{inputRef = input}}
        type="text"/> */}

        <input type="submit" value="submit" onClick={onClick}/>
      </div>
    </div>
  )
}
class App extends Component {
  onClick = () =>{
    //console.log(this.firstName.value);
    alert(`yey: ${this.firstName.value} | ${this.lastName.value} submitted ! :)`);
   }

   onKeyUp = (target,e) =>{
    if(e.keyCode === 13){
      switch(target){
        case 'firstName':
            this.lastName.focus();
            break;
        case 'lastName':
            this.age.focus();
            break;
        case 'age':
            this.submit.focus();
            break;
        default:
            this.firstName.focus();
        
      }
      
    }
   }
  render (){
    return (
      <div className="App">
          <FuncCustomComp/>
          <div>
            <span>First Name :</span>
            <input ref={(input)=>{this.firstName=input}} 
             onKeyUp={this.onKeyUp.bind(this,'firstName')}
             type="text"/>
          </div>

          <div>
            <span>Last Name:</span>
            <input ref={(input)=>{this.lastName=input}} 
             onKeyUp={this.onKeyUp.bind(this,'lastName')}
            type="text"/>
          </div>

          <div>
            <span>Age:</span>
            <input ref={(input)=>{this.age=input}} 
             onKeyUp={this.onKeyUp.bind(this,'age')}
            type="text"/>
          </div>

          <div>
             <input 
             type="submit" 
             ref={(input)=>{this.submit=input}}
             onKeyUp={this.onKeyUp.bind(this,'submit')}
             value="submit" onClick={this.onClick}/>
          </div>
      </div>
    );
  }
  
}

export default App;
