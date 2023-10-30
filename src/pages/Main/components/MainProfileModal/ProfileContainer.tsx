import ProfileAvatar from './ProfileAvatar';
import ProfileBirthdayItem from './ProfileBirthdayItem';
import ProfileColorItem from './ProfileColorItem';
import ProfileMBTIItem from './ProfileMBTIItem';
import ProfileNameItem from './ProfileNameItem';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileContainer = () => {
  const { activeEdit, handleActiveEdit, userInfo } = useProfileModal();
  const buttonContent = activeEdit ? '프로필 저장' : '프로필 수정';

  return (
    <>
      <div className="h-36" style={{ backgroundColor: userInfo.color }} />
      <ProfileAvatar />
      <div className="relative -mt-28 flex flex-col p-6">
        <button
          className="font-medium btn btn-sm mb-6 self-end rounded-lg text-base-white"
          style={{ backgroundColor: userInfo.color }}
          onClick={handleActiveEdit}
        >
          {buttonContent}
        </button>
        <ProfileNameItem />
        <ProfileColorItem />
        <ProfileBirthdayItem />
        <ProfileMBTIItem />
      </div>
    </>
  );
};

export default ProfileContainer;
