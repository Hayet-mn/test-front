import React, { Component } from "react";
import Post from './post';
import axios from "axios";


 class listPosts extends Component {
 state ={
     listPost:[]
 }

  componentWillMount = () => {
    this.getpost();
  };


  getpost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.id}`).then(res => {
      this.setState({
        listPost: res.data
        
      });
      console.log("test")
    });
    
  };
  render() {
      
    return (
      <div >
     <div className="listPost">
    {this.state.listPost.map(el =>
        
        <Post  post={el} />
        )} 
            </div>
      </div>
    );
  }
}

export default listPosts;