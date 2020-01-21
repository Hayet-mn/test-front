import React, { Component } from "react";
import axios from "axios";

class comment extends Component {
  state = {
      comment: [] 
  };

  componentWillMount = () => {
    this.getNumberCom();
  };

  getNumberCom = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.id}`
      )
      .then(res => {
        this.setState({
          comment: res.data
        });
        console.log("test");
      });
  };
  render() {
    return (
      <div>
        <h3 style={{textAlign:"center"}}> <i class="fas fa-comment"></i> {this.state.comment.length} </h3>
      </div>
    );
  }
}

export default comment;
