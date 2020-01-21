import React, { Component } from "react";
import User from './user';
import axios from "axios";


 class listUsers extends Component {
 state ={
     list:[]
 }

  componentWillMount = () => {
    this.getusers();
  };


  getusers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({
        list: res.data
      });
    });
  };
  render() {
    return (
      <div >
     <div className="row">
    {this.state.list.map(el => <User  user={el} />)}
            </div>
      </div>
    );
  }
}

export default listUsers;