import './main-content.css';
import Profile from '../profile/profile';
import Background from '../background/background';
import PostList from '../post-list/post-list';
import MyPost from '../my-post/my-post';

const MainContent = () => {
  return (
    <main className="main-content">
      <Background />
      <Profile />
      <div className="posts">
        <MyPost />
        <PostList />
      </div>
      
    </main>
    
  );
};

export default MainContent;