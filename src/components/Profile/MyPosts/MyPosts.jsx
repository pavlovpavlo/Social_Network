import React from 'react';
import myposts_css from'./MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';

/* ref создание ссылки для привязки к элементу*/
/** current текущий элемент для ссылки */
const MyPosts = (props)=>{

    let postsElement = props.posts.map(post=><Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = ()=>{
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return(
        <div className={myposts_css.posts__block}>
            <h3>My posts</h3>
            <div>
                <div> 
                    <textarea ref = {newPostElement} value={props.newPostText} onChange = {onPostChange} cols="50" rows="10"/>
                </div>
                <button onClick = {addPost} >Add post</button>
            </div>
            <div className={myposts_css.posts}>
                {postsElement}
            </div>
      </div>
    );
}
export default MyPosts;