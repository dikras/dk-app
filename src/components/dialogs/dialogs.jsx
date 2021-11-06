import './dialogs.css';
import { DialogItem } from '../dialogItem/dialogItem';
import { MessageItem } from '../messageItem/messageItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';

const Dialogs = (props) => {
  debugger;
  const state = props.store.getState();
  const { dialogsPage } = state;
  const { dialogs, messages } = dialogsPage;

  const dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  const messagesElements = messages.map((message) => <MessageItem message={message.message} />);
  const newMessageBody = dialogsPage.newMessageBody;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (evt) => {
    const body = evt.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  

  return (
    <section className="dialogs-wrapper">
      <div className="dialogs">
        <ul className="dialogs__list-names">
          {dialogsElements}
        </ul>
        <ul className="dialogs__list-messages">
          {messagesElements}
        </ul>
      </div>
      <div className="dialogs-sender">
        <textarea
          className="dialogs__textarea"
          value={newMessageBody}
          placeholder="Enter your message"
          onChange={onNewMessageChange}
        ></textarea>
        <button
          className="dialogs__btn"
          onClick={onSendMessageClick}
        >Send</button>
      </div>
    </section>
  )
};

export default Dialogs;