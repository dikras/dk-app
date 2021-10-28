import './post-list.css';
import Post from '../post/post';

const PostList = () => {
  return (
    <ul className="post__list">
      <Post />
      <Post />
      <Post />
    </ul>
  );
};

export default PostList;