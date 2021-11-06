import './my-post.css';
import { createRef } from 'react';

const MyPost = (props) => {
  const newPostElement = createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  } 

  return (
    <div className="posts__mypost">
      <textarea className="posts__area" ref={newPostElement} value={props.newPostText} name="post" id="post" cols="30" rows="10"></textarea>
      <div className="posts__btn-block">
        <button className="posts__btn posts__btn--add" onClick={addPost}>Add post</button>
        <button className="posts__btn posts__btn--delete">Remove post</button>
      </div>
    </div>
  );
};

export default MyPost;