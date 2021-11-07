const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi!', likesCount: 12},
    {id: 2, message: 'How are you?', likesCount: 11},
    {id: 3, message: 'Maybe you want coffe?', likesCount: 7},
    {id: 4, message: 'I am glad to be here', likesCount: 23},  
  ],
  newPostText: 'frautruda.com',
};

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default: 
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;