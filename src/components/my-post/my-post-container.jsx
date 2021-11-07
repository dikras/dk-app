import MyPost from '../my-post/my-post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';

const MyPostContainer = (props) => {

  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  } 

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action);
  }

  return (
    <MyPost
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />);
};

export default MyPostContainer;