import './post.css';

const Post = (props) => {

  return (
    <li className="post__item">{ props.message } Likes: {props.likesCount} </li>
  );
};

export default Post;