const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 6, message: body,});
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export default dialogsReducer;