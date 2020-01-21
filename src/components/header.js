import React from "react";
import { Link } from "react-router-dom";

const navbar = props => {
  return (
    <div className="navbar">
          <Link to="/">
           <h1 style={{color:"white"}}>Users</h1>
          </Link>
     
    </div>
  );
};

export default navbar;
