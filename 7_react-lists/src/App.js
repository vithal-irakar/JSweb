import React, {Component} from 'react';
import './App.css';
import User from './components/user';
import UniqueId from 'react-html-id';

class App extends Component {

  constructor(){
    super();

    UniqueId.enableUniqueIds(this);
    this.state = {
      users:[
        // {id:'asdfg',name:'john', age:20},   //Id's hardcoded
        // {id:'asdfk',name:'peter', age:30},
        // {id:'asdfl',name:'jill', age:25}
         {id:this.nextUniqueId(),name:'john', age:20},   
         {id:this.nextUniqueId(),name:'peter', age:30},
         {id:this.nextUniqueId(),name:'jill', age:25}
      ]
    }

  }
  

  deleteUser = (index, e) =>{
    // states cannot be mutated thats why creting copy of state
    const users = Object.assign([], this.state.users);
    users.splice(index,1);
    this.setState({users:users})
  }

  changeUserName = (id, e) => {

    // Based on the Id we need to find element that is being changed
    const index = this.state.users.findIndex((user) =>{
      return user.id === id;
     }); 
     
     // Create a copy of matching element we cant mutate state directly so
     const user = Object.assign({}, this.state.users[index]);

     user.name = e.target.value;
    
     // Now copy entire state(users).
     const users = Object.assign([],this.state.users);
     
     // Replace changed user inside "users"
     users[index] = user;

     this.setState({users:users});

  }
  render (){
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) =>{
              return(<User 
                age={user.age}
                key={user.id}
                delEvent={this.deleteUser.bind(this, index) }
                changeEvent= {this.changeUserName.bind(this,user.id)}
                >{user.name}</User>)
            })
          }
        </ul>
        
      </div>
    );
  }
  
}

export default App;
