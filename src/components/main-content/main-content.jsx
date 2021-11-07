import './main-content.css';
import Profile from '../profile/profile';
import Background from '../background/background';
import PostList from '../post-list/post-list';
import MyPosts from '../my-post/my-post';

const MainContent = (props) => {
  return (
    <main className="main-content">
      <Background />
      <Profile />
      <div className="posts">
        <MyPosts />
        <PostList />
      </div>
    </main>
    
  );
};

export default MainContent;