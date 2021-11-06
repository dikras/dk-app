import './post-list.css';
import Post from '../post/post';

const PostList = () => {
  return (
    <ul className="post__list">
      <Post message="Hi, how are you?" />
      <Post message="It's my first post" />
      <Post message="Hello, Dima!" />
    </ul>
  );
};

export default PostList;