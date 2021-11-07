import './main-content.css';
import Profile from '../profile/profile';
import Background from '../background/background';
import MyPostContainer from '../my-post/my-post-container';

const MainContent = (props) => {

  return (
    <main className="main-content">
      <Background />
      <Profile />
      <div className="posts">
        <MyPostContainer
          store={props.store}
        />
      </div>
    </main>
    
  );
};

export default MainContent;