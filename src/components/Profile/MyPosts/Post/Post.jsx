import React from 'react';
import post_css from'./Post.module.css';

const Post = (props)=>{
    return(
        <div className={post_css.item}>
            <img src="https://imgur.com/I80W1Q0.png" alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
            
        </div>      
    );
}
export default Post;