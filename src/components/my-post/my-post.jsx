import './my-post.css';

const MyPost = () => {
  return (
    <div className="posts__mypost">
      <textarea className="posts__area" name="post" id="post" cols="30" rows="10"></textarea>
      <button className="posts__btn posts__btn--add">Add post</button>
      <button className="posts__btn posts__btn--delete">Remove post</button>
    </div>
  );
};

export default MyPost;