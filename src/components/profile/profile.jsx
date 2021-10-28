import './profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUz8e3kjZW4VAyax3IH8mVZ95d1sMOptcxjQ&usqp=CAU" alt="" />
      </div>
      <ul className="profile__list">
        <li className="profile__item"><span>Name:</span> Dmitry Kr.</li>
        <li className="profile__item"><span>Job:</span> Junior React Developer</li>
        <li className="profile__item"><span>Who is Mr. ...?</span> Husband, father and just a good guy</li>
        <li className="profile__item"><span>Site: </span>frautruda.com</li>
      </ul>
    </div>
  );
};

export default Profile;