import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        'Hi!',
        'How are you?',
        'Maybe you want coffe?',
        'I am glad to be here',  
      ],
      newPostText: 'frautruda.com',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dima',},
        {id: 2, name: 'Dzalal',},
        {id: 3, name: 'Gennady',},
        {id: 4, name: 'Andrew',},
        {id: 5, name: 'Maria',},
      ],
      messages: [
        {id: 1, message: 'Hello, everybody!',},
        {id: 2, message: 'Good night for all!',},
        {id: 3, message: 'Do you want to know a secret?',},
        {id: 4, message: 'There are places I remember...',},
        {id: 5, message: 'Whole my life, I love them all',},
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;