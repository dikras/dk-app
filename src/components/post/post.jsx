import './post.css';

const Post = (props) => {

  return (
    <li className="post__item">{ props.message }</li>
  );
};

export default Post;