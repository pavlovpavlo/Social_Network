import React from 'react';
import myposts_css from'./MyPosts.module.css';
import Post from './Post/Post';

/* ref создание ссылки для привязки к элементу*/
/** current текущий элемент для ссылки */
const MyPosts = (props)=>{

    let postsElement = props.profilePage.posts.map(post=><Post key={post.id} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = ()=>{
        props.addPost();
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className={myposts_css.posts__block}>
            <h3>My posts</h3>
            <div>
                <div> 
                    <textarea ref = {newPostElement} value={props.profilePage.newPostText} onChange = {onPostChange} cols="50" rows="10"/>
                </div>
                <button onClick = {onAddPost} >Add post</button>
            </div>
            <div className={myposts_css.posts}>
                {postsElement}
            </div>
      </div>
    );
}
export default MyPosts;