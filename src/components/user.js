import React from 'react';
import {Link} from 'react-router-dom'

const User = function (props) {
    return <div className="col-3 mb-4">

        <div className="cardUser">
            
            <div className="cardbody">
                <button className="circle">{props.user.name[0]}</button>
                <h4 style={{ color: " #ff5050" }}>{props.user.name}</h4>
                <p> <span style={{ color: "gray" }}>email:</span>{props.user.email}</p>
                <p className="card-text"><span style={{ color: "gray" }}>phone:</span> {props.user.phone}</p>
                <p className="card-text"><span style={{ color: "gray" }}>website:</span> {props.user.website}</p>
                 
                 
                <Link to={`/listPosts/${props.user.id}`}>
                <button class="btn btn-success">Posts</button>
                </Link>
            </div>
        </div>
    </div>
}

export default User;