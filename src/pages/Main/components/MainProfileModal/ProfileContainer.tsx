import ProfileAvatar from './ProfileAvatar';
import ProfileBirthdayItem from './ProfileBirthdayItem';
import ProfileColorItem from './ProfileColorItem';
import ProfileMbtiItem from './ProfileMbtiItem';
import ProfileNameItem from './ProfileNameItem';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileContainer = () => {
  const { activeEdit, handleActiveEdit, userInfo } = useProfileModal();

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
          {activeEdit ? '프로필 저장' : '프로필 수정'}
        </button>
        <ProfileNameItem />
        <ProfileColorItem />
        <ProfileBirthdayItem />
        <ProfileMbtiItem />
      </div>
    </>
  );
};

export default ProfileContainer;
