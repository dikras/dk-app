import './profile.css';
import { ProfileAvatar } from './profile-avatar/profile-avatar';
import { ProfileInfo } from './profile-info/profile-info';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileAvatar />
      <ProfileInfo />
    </div>
  );
};

export default Profile;