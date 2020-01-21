import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Users from './components/listUsers';
import Header from './components/header'
import ListPosts from "./components/listPosts";
import DetailsPost from "./components/detailsPost";
import "./App.css";

export default class app extends Component {
 
  render() {
    return (
      <div >
        
        <div style={{ backgroundColor: "#d6d6c2" }}>
        <Router>
         <Header/>
          <Route exact path="/" render={() => <Users/>} />

          <Route
            path="/listPosts/:id"
            render={props => <ListPosts id={props.match.params.id} />}/>

           <Route
            path="/detailsPost/:id"
            render={props => <DetailsPost id={props.match.params.id} />}/>

        </Router>
      </div>
     </div>
    );
  }
}

