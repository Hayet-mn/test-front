import React from 'react';
import {Link} from 'react-router-dom';
import Count from './nombreCom';


const Post = function ({post}) {
    return <div className="col-3 mb-4">
        <div className="cardPost">
            
            <div > 
                
                <b className="card-title">{post.title}</b>

                <p className="card-text" > {post.body}</p>

                <Count id={post.id}/>

                <Link to={`/detailsPost/${post.id}`}>
                <button class="btn btn-info">Details</button>
                </Link>
            </div>
        </div>
    </div>
}

export default Post;