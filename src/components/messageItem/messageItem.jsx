export const MessageItem = (props) => {
  const { message } = props;
  
  return (
    <li className="dialogs__list-item">{message}</li>
  );
};