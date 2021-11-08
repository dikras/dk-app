import './dialogs.css';
import { DialogItem } from '../dialogItem/dialogItem';
import { MessageItem } from '../messageItem/messageItem';

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((dialog, id) => <DialogItem key={id} name={dialog.name} id={dialog.id} />);
  const messagesElements = state.messages.map((message, id) => <MessageItem key={id} message={message.message} />);
  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (evt) => {
    const body = evt.target.value;
    props.updateNewMessageBody(body);
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