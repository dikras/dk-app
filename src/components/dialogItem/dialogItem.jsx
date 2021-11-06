import { NavLink } from 'react-router-dom';

export const DialogItem = (props) => {
  const { name, id } = props;
  const path = `/dialogs/${id}`;

  return (
    <li className="dialogs__item active">
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};