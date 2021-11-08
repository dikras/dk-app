import './my-post.css';
import { createRef } from 'react';
import Post from '../post/post';

const MyPost = (props) => {

  let postElements = props.posts.map((post, id) => <Post message={post.message} likesCount={post.likesCount} key={id} />);
  
  const newPostElement = createRef();

  const onAddPost = () => {
    props.addPost();
  } 

  const onPostChange = (evt) => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className="posts__mypost">
      <textarea
        className="posts__area"
        ref={newPostElement}
        value={props.newPostText}
        onChange={onPostChange}
      ></textarea>
      <div className="posts__btn-block">
        <button
          className="posts__btn posts__btn--add"
          onClick={onAddPost}
        >Add post</button>
        <button className="posts__btn posts__btn--delete">Remove post</button>
      </div>
      <ul className="post__list">
        {postElements}
      </ul>
    </div>
  );
};

export default MyPost;