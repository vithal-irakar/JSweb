/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import './App.css';
import logo from "./logo.svg";
import { connect } from "react-redux";
import  * as  actionCreator  from "./store/actions/actions";

class App extends Component {
  // state = {
  //   age:21
  // }

  // onAgeUp = () =>{
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })
  // }

  // onAgeDown = () =>{
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }

  render (){
    return (
      <div className="App">
        <div>Age:<span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo"/>}
      </div>
    );
  }
  
}

const mapStateToProps = (state) =>{
    return {
      age:state.age,
      loading: state.loading
    }
};
const mapDispatchToProps = (dispatch) =>{
  return{
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1))

  };

};
export default connect(mapStateToProps, mapDispatchToProps)(App);
