import React, { Component } from "react";

import axios from "axios";


 class detailsPost extends Component {
 state ={
     details:[]
 }

  componentWillMount = () => {
    this.getdetails();
  };


  getdetails = () => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`).then(res => {
      this.setState({
        details: res.data
        
      });
      console.log("test")
    });
    
  };
  render() {
      
    return (
      <div >
     <div className="commentPost">
    {this.state.details.map(el =>

        
            <div className="comment">
            <h5>{el.name}</h5>
            <b>{el.email}</b>
            <p style={{color:"gray"}}> {el.body}</p>
            </div>
      
      
        )} 
            </div>
      </div>
    );
  }
}

export default detailsPost;